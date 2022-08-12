import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  SimpleGrid,
  Grid,
  Container,
  Title,
  ThemeIcon,
  Card,
  Skeleton,
  Paper,
  List,
  Table,
  ScrollArea,
  Box,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Timeline,
} from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons';

interface Response {
  title: string | null;
}

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

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('s');

  return json({
    title: search,
  });
};

export default function JobSearch() {
  const { title } = useLoaderData<Response>();

  const listing = companies.map((company, i, arr) => (
    <tr key={company}>
      <td>
        <Group position="apart">
          <div>{company}</div>
          <Box pr={8}>110k$/y</Box>
        </Group>
      </td>
    </tr>
  ));

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
          {title}
        </Text>
        - 1,398 open positions
      </Title>
      <Grid mt={12}>
        <Grid.Col span={4}>
          <Paper withBorder sx={{ overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1590402494756-10c265b9d736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" />
            <Title order={3} p={12} pb={24}>
              Top Employers
            </Title>
            <ScrollArea sx={{ height: 400 }}>
              <Table highlightOnHover verticalSpacing="md">
                <tbody>{listing}</tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </Grid.Col>
        <Grid.Col span={5}>
          <Paper p="md" withBorder>
            <Title order={2} py={12}>
              Story
            </Title>
            <Text size="md" color="dimmed">
              Product management is a relatively new discipline, but its roots
              range back nearly a century. Understanding the history of product
              management and how it’s going helps navigate the weird liminal
              space we often find ourselves in. The need for product management,
              however, isn’t new. Like most innovations, people didn’t realize
              they needed it, and instead, they relied on some awkward
              workarounds. But then product management finally evolved into a
              mature, well-defined going concern.
            </Text>
          </Paper>
          <Paper p="md" mt={12} withBorder>
            <Title order={3} py={12}>
              Responsibiliy
            </Title>
            <Text size="md" color="dimmed">
              In your role as a product manager, you will be tasked with setting
              priorities and creating products that have features and
              functionalities that draw in and keep people. You will collaborate
              with engineers and UI experts to make sure they comprehend the
              requirements, and you will then take the lead in the study to
              determine how well they perform for users. Important prerequisites
              include a solid grasp of balancing business and product
              constraints as well as the capacity to perform well in
              cross-functional teams.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={3}>
          <SimpleGrid cols={1}>
            <Paper p="md" withBorder>
              <Title order={3} pb={24}>
                Career Path
              </Title>

              <Timeline active={2} bulletSize={14} lineWidth={2}>
                <Timeline.Item title="Training or Internship"></Timeline.Item>
                <Timeline.Item title="Junior Product Manager"></Timeline.Item>
                <Timeline.Item title="Product Manager"></Timeline.Item>
                <Timeline.Item title="VP Product"></Timeline.Item>
                <Timeline.Item title="CPO" lineVariant="dashed"></Timeline.Item>
                <Timeline.Item title="CEO"></Timeline.Item>
              </Timeline>
            </Paper>
            <Paper withBorder p="md" radius="md">
              <Group position="apart">
                <div>
                  <Text
                    color="dimmed"
                    transform="uppercase"
                    weight={700}
                    size="xs"
                  >
                    Avg. Salary
                  </Text>
                  <Text weight={700} size="xl">
                    90k$/year
                  </Text>
                </div>
                <ThemeIcon
                  color="gray"
                  variant="light"
                  sx={(theme) => ({
                    color: theme.colors.teal[6],
                  })}
                  size={38}
                  radius="md"
                >
                  <IconArrowUpRight size={28} stroke={1.5} />
                </ThemeIcon>
              </Group>
              <Text color="dimmed" size="sm" mt="md">
                <Text component="span" color={'teal'} weight={700}>
                  1.8%
                </Text>{' '}
                increase compared to last month
              </Text>
            </Paper>
            <Paper withBorder p="md" radius="md">
              <Group position="apart">
                <div>
                  <Text
                    color="dimmed"
                    transform="uppercase"
                    weight={700}
                    size="xs"
                  >
                    Position Popularity
                  </Text>
                  <Text weight={700} size="xl">
                    38th Place
                  </Text>
                </div>
                <ThemeIcon
                  color="gray"
                  variant="light"
                  sx={(theme) => ({
                    color: theme.colors.teal[6],
                  })}
                  size={38}
                  radius="md"
                >
                  <IconArrowUpRight size={28} stroke={1.5} />
                </ThemeIcon>
              </Group>
              <Text color="dimmed" size="sm" mt="md">
                <Text component="span" color={'teal'} weight={700}>
                  +2
                </Text>{' '}
                increase compared to last month
              </Text>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
