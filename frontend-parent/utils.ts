import ky, { TimeoutError } from "ky";

const baseUrl = "http://43.203.246.159:8080";

export const fetcher = ky.create({
  prefixUrl: baseUrl,
  retry: 0,
  timeout: 10000,
  cache: "no-store",
  throwHttpErrors: false,
  hooks: {
    beforeError: [
      (error) => {
        if (error instanceof TimeoutError) {
          console.error(error);
        }
        return error;
      },
    ],
  },
});
