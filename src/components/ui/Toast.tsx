import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`pointer-events-auto p-4 rounded-2xl glass-panel border flex items-start justify-between gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
                isSuccess
                  ? 'border-emerald-500/40 bg-emerald-950/40'
                  : isError
                  ? 'border-rose-500/40 bg-rose-950/40'
                  : 'border-cyan-500/40 bg-cyan-950/40'
              }`}
            >
              <div className="flex items-start gap-3">
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                {isError && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                {!isSuccess && !isError && <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />}

                <div>
                  <h4 className="font-display font-bold text-slate-100 text-xs tracking-wide">
                    {toast.title}
                  </h4>
                  {toast.description && (
                    <p className="text-[11px] font-mono text-slate-300 mt-0.5 leading-relaxed">
                      {toast.description}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => onDismiss(toast.id)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close Notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
