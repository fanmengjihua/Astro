declare global {
  interface Window {
    showLoginPage: () => void;
    showRegisterPage: () => void;
    showResetPasswordPage: () => void;
    showAdminPanel: () => void;
    openTab: (evt: any, tabName: string) => void;
    login: () => Promise<void>;
    register: () => Promise<void>;
    resetPassword: () => Promise<void>;
    logout: () => void;
    savePost: () => Promise<void>;
    saveAuthor: () => Promise<void>;
  }
}

export {};
