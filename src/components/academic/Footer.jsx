import React from 'react';

export default function Footer({ name }) {
    return (
        <footer className="py-12 bg-slate-900 text-center">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {name}. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Designed for academic excellence
                </p>
            </div>
        </footer>
    );
}