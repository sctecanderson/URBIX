import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// COLOQUE SEUS DADOS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "ID",
    appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Função para trocar entre Login e Cadastro
window.toggleMode = (signup) => {
    document.getElementById('signup-fields').classList.toggle('hidden', !signup);
    document.getElementById('confirm-password-field').classList.toggle('hidden', !signup);
    document.getElementById('tab-login').classList.toggle('active', !signup);
    document.getElementById('tab-signup').classList.toggle('active', signup);
    document.getElementById('btn-submit').innerText = signup ? 'Cadastrar' : 'Entrar';
    document.getElementById('social-section').classList.toggle('hidden', signup);
};

// Evento de Login com Google
document.getElementById('btn-google').addEventListener('click', async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        alert("Logado com Google!");
    } catch (error) {
        alert("Erro no Google Login: " + error.message);
    }
});

document.getElementById('btn-facebook').addEventListener('click', () => alert("Em breve!"));

// Adicione aqui também a lógica do formulário (submit) que estava no código anterior

 