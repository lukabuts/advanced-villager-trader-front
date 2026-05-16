import { MinecraftButton, WorldModalWrapper } from "@/components/ui";
import { LOCAL_STORAGE_KEYS } from "@/constants";
import { useModalStore, useNotificationStore } from "@/store";
import { CopyIcon, EditIcon } from "lucide-react";
import { useRef, useState } from "react";
import type { ManageDataModalProps } from "./types";

export function ManageDataModal({
  initialValue,
  initialEditing = false,
}: ManageDataModalProps) {
  const data = localStorage.getItem(LOCAL_STORAGE_KEYS.WORLDS);
  const parsedData = data ? JSON.parse(data) : null;
  const jsonString = JSON.stringify(parsedData, null, 2);

  const [textareaValue, setTextareaValue] = useState(
    initialValue ?? jsonString ?? "No world data found.",
  );
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(initialEditing);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const { show } = useNotificationStore();
  const { open, close } = useModalStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function showMessage(type: "success" | "error", text: string) {
    setMessage({ type, text });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  }

  const handleDownload = () => {
    const blob = new Blob([jsonString], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "minecraft-worlds.json";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!jsonString || isCopied) return;

    try {
      await navigator.clipboard.writeText(jsonString);
    } catch {
      const textarea = document.createElement("textarea");

      textarea.value = jsonString;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand("copy");

      document.body.removeChild(textarea);
    } finally {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result;

      if (typeof text === "string") {
        setTextareaValue(text);
      }
    };

    reader.readAsText(file);
    showMessage("success", "File loaded! Click Save to apply changes.");
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  function handleSaving() {
    try {
      const parsed = JSON.parse(textareaValue);
      localStorage.setItem(LOCAL_STORAGE_KEYS.WORLDS, JSON.stringify(parsed));
      close();
      show("World data saved successfully!");
    } catch (err) {
      console.error("Error parsing JSON:", err);
      showMessage("error", "Invalid JSON format.");
    }
  }

  return (
    <WorldModalWrapper
      title="Manage World Data"
      onCancel={close}
      onSubmit={() => {
        open(
          <WorldModalWrapper
            title="Confirm Save"
            onCancel={() => {
              open(
                <ManageDataModal
                  initialValue={textareaValue}
                  initialEditing={isEditing}
                />,
              );
            }}
            onSubmit={handleSaving}
            label="Yes, Save"
          >
            <span className="font-mojangles">Save Changes?</span>
          </WorldModalWrapper>,
        );
      }}
      label="Save"
    >
      <div className="flex gap-2 mb-2">
        <MinecraftButton onClick={handleImportClick} label="Import Data" />
        <MinecraftButton onClick={handleDownload} label="Download Data" />
      </div>
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          className="hidden"
          onChange={handleFileChange}
        />
        <textarea
          className="w-full h-48 p-2 bg-black/20 border border-gray-600 rounded resize-none text-sm font-mojangles min-scrollbar"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          readOnly={!isEditing}
          disabled={!isEditing}
        />
        <div className="absolute bottom-3 right-3 text-content-muted transition-all flex gap-1">
          <button
            className="hover:text-content"
            onClick={() => setIsEditing(!isEditing)}
          >
            <EditIcon
              className={`hover:text-content ${isEditing ? "text-emerald-dark" : ""}`}
              size={16}
            />
          </button>
          <button
            className=" hover:text-content disabled:opacity-50"
            onClick={handleCopy}
            disabled={!jsonString}
            title="Copy Data"
          >
            <div className="relative">
              <CopyIcon size={16} />
              <div className="absolute -top-7 right-1/2 transform translate-x-1/2">
                {isCopied && (
                  <span className="text-emerald-dark bg-bg-3 p-0.5 rounded-sm text-xs border border-emerald-dark shadow-xl">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </button>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mt-4 p-2 rounded absolute z-10 -top-3 right-1/2 transform translate-x-1/2 text-center text-xs font-mojangles animate-fade-in bg-bg-3 border  ${
              message.type === "success"
                ? "border-emerald-dark text-emerald"
                : " text-red border-red-dark"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </WorldModalWrapper>
  );
}
