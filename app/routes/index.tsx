import {
  createStyles,
  Container,
  Text,
  Button,
  Tabs,
  Input,
} from '@mantine/core';
import { useState } from 'react';
import { SearchInput } from '~/components/SearchInput';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export default function Index() {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>('Job');

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            inherit
          >
            fully featured
          </Text>{' '}
          Job information station
        </h1>

        <Text className={classes.description} color="dimmed">
          Find the path to your dream job, or understand what you're already
          capable of doing. Start your new career, move markets, or find the
          next goal
        </Text>

        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List sx={{ zIndex: 10 }} grow>
            <Tabs.Tab value="Job" key="job">
              Job
            </Tabs.Tab>
            <Tabs.Tab value="Degree" key="degree">
              Degree
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <form method="get" action={`/${activeTab?.toLocaleLowerCase()}`}>
          <Input
            sx={{
              marginTop: -1,
            }}
            name="s"
            radius={0}
            size="xl"
            icon={<Text color="dimmed">{activeTab}</Text>}
          />
          <Button
            sx={{ marginTop: 8 }}
            type="submit"
            size="lg"
            fullWidth
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
          >
            Find{' '}
            {activeTab === 'job'
              ? 'a path to your dreams!'
              : 'your perfect role'}
          </Button>
        </form>
      </Container>
    </div>
  );
}
