import axios from "axios";

export const loginService = () => {
  const url =
    "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000";

  // Redirect the user to the Google login page
  window.location.href = url;
};


// https://localhost:3000/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoid2ViLmNoaW51MjEyN0BnbWFpbC5jb20iLCJpZCI6OTcwLCJmaXJzdE5hbWUiOiJjaGlubWF5YSBrdW1hciIsImxhc3ROYW1lIjoiYmVoZXJhIn0sImlhdCI6MTcyMzYxMzQ4MywiZXhwIjoxNzU1MTQ5NDgzfQ.W6WAIApmQapC0oapFOTiYhJZW7GS3w709_iTqMFAaaI

// https://localhost:3000/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoid2ViLmNoaW51MjEyN0BnbWFpbC5jb20iLCJpZCI6OTcwLCJmaXJzdE5hbWUiOiJjaGlubWF5YSBrdW1hciIsImxhc3ROYW1lIjoiYmVoZXJhIn0sImlhdCI6MTcyMzYxNDE1MywiZXhwIjoxNzU1MTUwMTUzfQ.6_KCb7QFJ9cRjj836da3tBEKU1i__YihNxNeoSKC4jA