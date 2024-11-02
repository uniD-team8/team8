import ky, { TimeoutError } from "ky";

const baseUrl = "";

export const fetcher = ky.create({
  prefixUrl: baseUrl,
  retry: 0,
  timeout: 5000,
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
