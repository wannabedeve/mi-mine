// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     title?: string;
//     children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50">
//                     {/* Overlay */}
//                     <motion.div
//                         className="absolute inset-0 bg-black bg-opacity-50"
//                         onClick={onClose}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.5 }}
//                         exit={{ opacity: 0 }}
//                     />

//                     {/* Modal */}
//                     <motion.div
//                         className="relative bg-white rounded-2xl shadow-lg w-full max-w-lg max-h-[80vh] p-6 overflow-y-auto"
//                         initial={{ opacity: 0, scale: 0.9, y: 50 }}
//                         animate={{ opacity: 1, scale: 1, y: 0 }}
//                         exit={{ opacity: 0, scale: 0.9, y: 50 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                     >
//                         {/* Close Button */}
//                         <button
//                             onClick={onClose}
//                             className="absolute top-3 right-3 text-gray-600 hover:text-black"
//                         >
//                             ✕
//                         </button>

//                         {/* Title */}
//                         {title && (
//                             <h2 className="text-xl font-semibold mb-4 border-b pb-2">
//                                 {title}
//                             </h2>
//                         )}

//                         {/* Scrollable Body */}
//                         <div className="space-y-4">{children}</div>
//                     </motion.div>
//                 </div>
//             )}
//         </AnimatePresence>
//     );
// };

// export default Modal;





"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    // 🔒 Lock background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-2 flex items-center justify-center z-50 mt-10">
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-lg w-full max-w-lg max-h-[80vh] p-6 overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        {title && (
                            <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-slate-500">
                                {title}
                            </h2>
                        )}

                        {/* Scrollable Body */}
                        <div className="space-y-4">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
