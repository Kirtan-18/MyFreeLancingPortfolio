import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'CONFIRM DELETE',
  cancelText = 'CANCEL',
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border-rose-500/40 max-w-md w-full text-center space-y-4 shadow-[0_0_50px_rgba(244,63,94,0.2)]"
        >
          <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-xl font-display font-bold text-slate-100 uppercase tracking-wider">
              {title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-2 leading-relaxed">
              {message}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onCancel}
              className="flex-1 py-3 rounded-full glass-panel text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)]"
            >
              {confirmText}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
