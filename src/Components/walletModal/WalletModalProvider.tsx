import type { FC, ReactNode } from 'react';
import React, { useState } from 'react';
import { WalletModalContext } from './useWalletModal';
import type { WalletModalProps } from './WaletModal';
import { WalletModal } from './WaletModal';

export interface WalletModalProviderProps extends WalletModalProps {
    children: ReactNode;
}

export const WalletModalProvider: FC<WalletModalProviderProps> = ({ children, ...props }) => {
    const [visible, setVisible] = useState(false);

    return (
        <WalletModalContext.Provider
            value={{
                visible,
                setVisible,
            }}
        >
            {children}
            {visible && <WalletModal {...props} />}
        </WalletModalContext.Provider>
    );
};
