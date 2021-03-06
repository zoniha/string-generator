import { Box, Button, IconButton, Text, Textarea, useClipboard, VStack } from '@chakra-ui/react';
import { BsTrashFill } from 'react-icons/bs';
import { FC, memo } from 'react';

import { OutputCardProps } from '../../../../types/outputCardProps';

export const OutputCard: FC<OutputCardProps> = memo((props) => {
  const { digits, text, onClick } = props;
  const { hasCopied, onCopy } = useClipboard(text);

  return (
    <Box
      w="100%"
      h="280px"
      maxW={1200}
      mt={10}
      bg="purple.800"
      borderRadius="10px"
      shadow="md"
      p={4}
      pos="relative"
    >
      <VStack gap={4}>
        <Box w="100%" bg="gray.700" borderRadius="10px" pos="relative">
          <Textarea
            sx={{
              '&::-webkit-scrollbar': {
                width: '8px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.1)`,
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '100px',
                backgroundColor: `rgba(0, 0, 0, 0.15)`,
              },
            }}
            w="80%"
            fontSize={20}
            size="md"
            rows={6}
            resize="none"
            border="none"
            isReadOnly
            value={text}
          />
          <Button
            size="sm"
            color="gray.700"
            bg="purple.300"
            pos="absolute"
            top="10px"
            right="10px"
            ml={2}
            _hover={{ opacity: 0.8 }}
            onClick={onCopy}
          >
            {hasCopied ? 'Copied ✨' : 'Copy'}
          </Button>
        </Box>
        <Box w="100%">
          <Text fontSize={18}>桁数： {digits}</Text>
          <IconButton
            colorScheme="red"
            aria-label="delete"
            size="md"
            icon={<BsTrashFill fontSize={30} />}
            pos="absolute"
            bottom={3}
            right={6}
            onClick={onClick}
          />
        </Box>
      </VStack>
    </Box>
  );
});
