export function getCartSession() {
  let session = localStorage.getItem("cartSession");

  if (!session) {
    session = crypto.randomUUID();

    localStorage.setItem("cartSession", session);
  }

  return session;
}
