import { z } from 'zod';
import { procedure, router } from '../trpc';

export const helloRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string()
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`
      };
    }),
  hi: procedure.query(() => {
    return 'hi';
  })
});
