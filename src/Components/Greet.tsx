import { Box, Text } from "@chakra-ui/react";

type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      <Box>
        <Text>Hello {props.name}</Text>
      </Box>
    </>
  );
};

export default Greet;
