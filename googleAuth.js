
export function initGoogleAuth(onSuccess) {
  window.google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    callback: onSuccess,
  });

  window.google.accounts.id.renderButton(
    document.getElementById("google-login"),
    { theme: "outline", size: "large" }
  );
}
