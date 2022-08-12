import {
  Box,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('s');

  return json({
    title: search,
  });
};

const degreeName: Record<string, string> = {
  mba: 'Master of Business Administration',
  'bsc cs': 'BSc Computer Science',
};

const createCell = (
  name: string,
  salary: string,
  popularity: string,
  trend: 'up' | 'down'
) => (
  <tr key={name}>
    <td>{name}</td>
    <td>{salary}</td>
    <td>{popularity}</td>
    <td>{trend}</td>
  </tr>
);

const companies = [
  'Walmart',
  'Amazon',
  'Apple',
  'CVS Health',
  'UnitedHealth Group',
  'Exxon Mobil',
  'Berkshire Hathaway',
  'Alphabet',
  'McKesson',
  'AmerisourceBergen',
];

`
1. One slide with a ton of text, The Solution. --> Show the prototype instead
2. Add quotes from our research or the persona in the ideation
`;

export default function DegreeSearch() {
  const { title } = useLoaderData<{ title: string }>();

  const listing = [
    createCell('Product Manager', '90k', '36th', 'up'),
    createCell('Middle Management', '86k', '3rd', 'down'),
    createCell('Financial controller', '122k', '54th', 'up'),
    createCell('Chief Financial Officer (CFO)', '197k', '11th', 'down'),
    createCell('Financial analyst', '81k', '7th', 'down'),
    createCell('Accounting manager', '65k', '88th', 'up'),
  ];

  return (
    <Container size="xl">
      <Title order={1} mt={44}>
        <Text
          component="span"
          mr={12}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          inherit
        >
          {degreeName[title] ?? title}
        </Text>
      </Title>
      <Paper withBorder mt={12}>
        <Table highlightOnHover verticalSpacing="md">
          <thead>
            <tr>
              <th>Role</th>
              <th>Avg. Salary</th>
              <th>Popularity Rank</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>{listing}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}
