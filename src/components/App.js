import React from 'react';
import { MainRoutes } from "../utils/routes";
import { AuthProvider } from '../contexts/authContext';

const App = () => {
    return (
        <main className="p-container">
            <AuthProvider>
                <MainRoutes />
            </AuthProvider>
        </main>
    );
}

export default App;