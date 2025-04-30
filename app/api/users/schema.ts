import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email(),
});

export default schema;
