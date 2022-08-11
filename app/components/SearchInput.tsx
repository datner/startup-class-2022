import { Input, Text, NativeSelect } from '@mantine/core';

const data = [
  { value: 'aa', label: 'AA' },
  { value: 'as', label: 'AS' },
  { value: 'aas', label: 'AAS' },
  { value: 'afa', label: 'AFA' },
  { value: 'bs', label: 'BSc' },
  { value: 'ba', label: 'BA' },
  { value: 'ma', label: 'MA' },
  { value: 'ms', label: 'MS' },
  { value: 'mfa', label: 'MFA' },
  { value: 'mba', label: 'MBA' },
  { value: 'deng', label: 'D.Eng' },
  { value: 'edd', label: 'EdD' },
  { value: 'md', label: 'MD' },
];

interface SearchInputProps {
  degree: boolean;
}

export function SearchInput(props: SearchInputProps) {
  const { degree } = props;

  const select = (
    <NativeSelect
      data={data}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  );

  return (
    <Input
      sx={{
        marginTop: -1,
      }}
      name="s"
      radius={0}
      size="xl"
      rightSection={degree && select}
    />
  );
}
