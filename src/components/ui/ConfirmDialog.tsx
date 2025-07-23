import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmDialog({ open, message, onConfirm, onCancel }: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog-content">
        <p className="confirm-dialog-message">{message}</p>
        <div className="confirm-dialog-buttons">
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;

