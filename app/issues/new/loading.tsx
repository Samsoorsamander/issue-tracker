import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const loading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default loading;
