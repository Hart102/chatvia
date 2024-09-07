interface CookieOptions {
  name: string;
  value: string;
  days?: number;
}

export const setCookie = (options: CookieOptions) => {
  let expires = "";
  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    options.name + "=" + (options.value || "") + expires + "; path=/";
};

const getCookie = () => {
  const cookies = document.cookie.split(";");
  const cookieMap: Record<string, string> = {};
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    cookieMap[name] = value;
  });
  return cookieMap;
};

export const access_token = getCookie()["chatvia"];
