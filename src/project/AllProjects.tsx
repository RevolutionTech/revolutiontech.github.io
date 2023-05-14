import * as React from "react";
import keyBy from "lodash/keyBy";

import { Platform, Project } from "./project";

export const PROJECT_LIST: Project[] = [
  {
    name: "Letter Joy",
    slug: "letter-joy",
    visible: true,
    year: 2022,
    description: (
      <>
        Letter Joy is a cooperative word deduction game inspired by the board
        game{" "}
        <a href="https://czechgames.com/en/letter-jam/" target="_blank">
          Letter Jam
        </a>{" "}
        designed by{" "}
        <a
          href="https://boardgamegeek.com/boardgamedesigner/116183/ondra-skoupy"
          target="_blank"
        >
          Ondra Skoup&#xfd;
        </a>{" "}
        and published by{" "}
        <a href="https://czechgames.com/" target="_blank">
          Czech Games Edition
        </a>
        .
        <br />
        <br />
        Players will ultimately need to form a secret word from the letters they
        are dealt without ever looking at the letters they have. Players do this
        by interpreting clues given to them by other players.
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 2,
    maxPlayers: 6,
    additionalLinks: [
      {
        url: "https://letterjoy.revolutiontech.ca/",
        description: "Play Letter Joy",
      },
      {
        url: "https://github.com/RevolutionTech/letter-joy",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "PerDiem",
    slug: "perdiem",
    visible: true,
    year: 2016,
    description: (
      <>
        PerDiem is an equity crowdfunding platform for musicians. Artists can
        raise money for projects by giving back a percentage of their revenue to
        the investors that fund them.
        <br />
        <br />
        <small>
          PerDiem is the brainchild of Brandon Nelson. I just created the
          backend of the website.
        </small>
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/perdiem-django",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "K & L",
    slug: "k-and-l",
    visible: false,
    year: 2022,
    description: (
      <>
        A static website with information about the wedding of my partner
        Katrina &amp; I for the guests that attended. The website remains
        available to host the photo gallery from our special day.
        <br />
        <br />
        <small>
          The website was built on top of a Creative Commons HTML template. I
          cannot claim any credit for the design.
        </small>
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "https://katrinaand.lucasconnors.com/",
        description: "View Site",
      },
      {
        url: "https://github.com/RevolutionTech/k-and-l",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Esprit's Labyrinth",
    slug: "esprits-labyrinth",
    visible: true,
    year: 2010,
    description: (
      <>
        Esprit&apos;s Labyrinth tells the story of a man and his ambitious
        companion. On their journey, you will encounter a cast of characters,
        bloodthirsty monsters, and amusing puzzles.
        <br />
        <br />
        <small>
          Esprit&apos;s Labyrinth was created as an Independent Study Unit
          project in my grade 12 Communications Technology class and won first
          place in the Interactive Game category of the &apos;10 Cawthra
          Animation Festival.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
    additionalLinks: [
      {
        url: "https://www.youtube.com/watch?v=8udWR2oizvs",
        description: "Watch the Trailer",
      },
    ],
  },
  {
    name: "Rooster",
    slug: "rooster",
    visible: true,
    year: 2020,
    description: (
      <>
        Rooster is a tool to review activity on GitHub, JIRA, and other
        developer tools for reference in a daily standup.
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/rooster",
        description: "View Source Code (Backend)",
      },
      {
        url: "https://github.com/RevolutionTech/rooster-frontend",
        description: "View Source Code (Frontend)",
      },
    ],
  },
  {
    name: "Goslinks",
    slug: "goslinks",
    visible: true,
    year: 2019,
    description: (
      <>
        Goslinks allows users to create easy-to-remember "go" links to share
        with the rest of their team.
        <br />
        <br />
        All links are isolated by team, so for instance go/dashboard may
        redirect to a custom Tableau dashboard for one team, but the same go
        link might redirect to an internal GSheets spreadsheet for a different
        team.
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/goslinks",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Flamingo",
    slug: "flamingo",
    visible: true,
    year: 2015,
    description: (
      <>
        Flamingo is a photography contest web application. Users can submit
        their photos to contests and vote on their favourites.
      </>
    ),
    platforms: [Platform.WEB],
    screenshotCaptions: {
      flamingo:
        "The contest page where users can view and vote on photos that have been submitted to the contest.",
    },
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/flamingo",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Seared Quail",
    slug: "seared-quail",
    visible: true,
    year: 2015,
    description: (
      <>
        Seared Quail is a digital restaurant menu and order management web
        application.
        <br />
        <br />
        <small>
          I created this for a party in 2015, but restaurant owners could deploy
          Seared Quail in their restaurants to improve efficiency and
          communication of orders.
        </small>
      </>
    ),
    platforms: [Platform.WEB],
    screenshotCaptions: {
      searedquail0:
        "Users can view your menu and order from their phone or tablet, no download required.",
      searedquail1: "Simply select your items and a table to place an order.",
      searedquail2:
        "Administrators can update item descriptions and other details in real-time.",
      searedquail3:
        "Kitchen staff see all of the incoming orders as they arrive.",
    },
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/seared-quail",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "django-conditions",
    slug: "django-conditions",
    visible: true,
    year: 2014,
    description: (
      <>
        django-conditions is a Django app that allows creation of conditional
        logic in the Django admin.
        <br />
        <br />
        Some possible use cases include segmenting your user base into cohorts
        with targeted messaging, and providing different rewards to users
        depending on their expected value.
      </>
    ),
    platforms: [Platform.WEB, Platform.WINDOWS, Platform.MACOS, Platform.LINUX],
    screenshotCaptions: {
      djangoconditions: "Updating a ConditionsField in the Django admin.",
    },
    additionalLinks: [
      {
        url: "http://django-conditions.readthedocs.org/",
        description: "View Documentation",
      },
      {
        url: "https://pypi.org/project/django-conditions/",
        description: "View on PyPI",
      },
      {
        url: "https://github.com/RevolutionTech/django-conditions/",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Blockade",
    slug: "blockade",
    visible: true,
    year: 2009,
    description: (
      <>
        The idea of Blockade spawned from the basic mechanics of Tetris, and
        evolved into a structure where the object is to match blocks of the same
        shape and/or colour in a horizontal or vertical row of three blocks.
        <br />
        <br />
        <small>
          Blockade was a project created as a result of an Independent Study
          Unit project in my grade 11 Communications Technology class. Blockade
          won first place in the Interactive Game category of the &apos;09
          Cawthra Animation Festival.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
    additionalLinks: [
      {
        url: "http://www.youtube.com/watch?v=1lAI5e-zkxA",
        description: "Watch the Trailer",
      },
    ],
  },
  {
    name: "Evil Clutches",
    slug: "evil-clutches",
    visible: false,
    year: 2006,
    description: (
      <>
        In Evil Clutches, players control a dragon parent who must collect their
        young from the evil boss while avoiding demons the boss launches without
        warning. There are also power-ups to help players survive and collect
        their children.
        <br />
        <br />
        <small>
          Evil Clutches was originally designed by Mark Overmars and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Galactic Mail",
    slug: "galactic-mail",
    visible: false,
    year: 2006,
    description: (
      <>
        Galactic Mail is a simple space-themed game where players must travel to
        all of the moons on the screen to deliver mail to each one. After all of
        the mail is delivered, players can then travel to the planet to proceed
        to the next level.
        <br />
        <br />
        <small>
          Galactic Mail was originally designed by Mark Overmars and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Lazarus",
    slug: "lazarus",
    visible: false,
    year: 2006,
    description: (
      <>
        Players navigate a dangerous pit as the friendly blob Lazarus, avoiding
        heavy blocks dropped from above machinery. To escape, players must use
        the blocks to their advantage to puzzle their way out of the pit and
        stop the machinery!
        <br />
        <br />
        <small>
          Lazarus was originally designed by Mark Overmars and Jacob Habgood for{" "}
          <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Super Rainbow Reef",
    slug: "super-rainbow-reef",
    visible: false,
    year: 2006,
    description: (
      <>
        Memories of the classic Breakout will arise as players experience this
        game. Super Rainbow Reef plays similarly to the classic game, but with
        many new features and of course a relaxing reef theme.
        <br />
        <br />
        <small>
          Super Rainbow Reef was originally designed by Mark Overmars and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Koala-BR8",
    slug: "koala-br8",
    visible: false,
    year: 2006,
    description: (
      <>
        Koala-BR8 is a puzzle-lover&apos;s delight! Players control the movement
        of several separated koalas simultaneously through a maze, which must
        all reach an exit without a single one being eliminated.
        <br />
        <br />
        <small>
          Koala-BR8 was originally designed by Mark Overmars and Jacob Habgood
          for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
          <br />
          <br />I intended on creating an additional 6 levels of a higher
          difficulty, but that was never completed.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Wingman Sam",
    slug: "wingman-sam",
    visible: false,
    year: 2006,
    description: (
      <>
        Wingman Sam is a cooperative squadron shoot-down for two pilots. Players
        fire at the planes as they come to attack in preparation for the final
        boss battle. Players must maneuver carefully though&mdash; if one pilot
        is lost in action, the game is over.
        <br />
        <br />
        <small>
          Wingman Sam was originally designed by Mark Overmars and Jacob Habgood
          for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Tank War",
    slug: "tank-war",
    visible: false,
    year: 2006,
    description: (
      <>
        Tank War is a competitive shooting game where each player controls a
        tank. Players will discover power-ups throughout the map to assist with
        defeating their opponent.
        <br />
        <br />
        <small>
          Tank War was originally designed by Mark Overmars and Jacob Habgood
          for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Tic-Tac-Toe",
    slug: "tic-tac-toe",
    visible: false,
    year: 2006,
    description: (
      <>
        In the classic game of Tic-Tac-Toe players need three symbols in a row,
        column, or diagonal to win. In this implementation, you may notice that
        instead of X&apos;s and O&apos;s, Game Maker logos are used.
        <br />
        <br />
        <small>
          Tic-Tac-Toe was originally designed by Mark Overmars and Jacob Habgood
          for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Pyramid Panic",
    slug: "pyramid-panic",
    visible: false,
    year: 2006,
    description: (
      <>
        In Pyramid Panic, players control an explorer searching for an ancient
        treasure called the "Sword of RA". To get there, they must avoid giant
        scorpions and beetles, and destroy mummies. With substantial bravery and
        some luck, players can learn of the sword&apos;s true power!
        <br />
        <br />
        <small>
          Pyramid Panic was originally designed by Mark Overmars and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>. This is just my
          implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Hummingbird",
    slug: "hummingbird",
    visible: false,
    year: 2014,
    description: (
      <>
        Hummingbird is an application used to play custom theme songs (or
        walk-in songs) when a person enters a building. Hummingbird monitors the
        network and detects when a new device (identified by its MAC address)
        connects to the router. When a new device connects, Hummingbird plays
        the song associated with that device.
      </>
    ),
    platforms: [Platform.MACOS, Platform.LINUX],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/hummingbird",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Acid Drop",
    slug: "acid-drop",
    visible: true,
    year: 2006,
    description: (
      <>
        In Acid Drop, players avoid falling into the acid by paying close
        attention to the light in the top-right corner. When the colour for the
        light changes, players rush for the platform of the matching colour
        before the rest sink into the acid. After the platforms have been in the
        acid long enough, the colours begin to burn away and players have to
        remember which platform belongs to which colour.
        <br />
        <br />
        <small>
          Acid Drop was inspired by the Mario Party mini-game Mushroom Mix-Up.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Attack of the Boom-Boom",
    slug: "attack-of-the-boom-boom",
    visible: true,
    year: 2006,
    description: (
      <>
        Inspired by the occasional boss battles at the end of each fortress from
        Super Mario Brothers 3, this game challenges players with an unstoppable
        Boom-Boom. Players try to survive as long as possible while stomping the
        Boom-Boom on the head to progress. Be warned though, he can get quite
        vicious!
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Ballistix",
    slug: "ballistix",
    visible: true,
    year: 2005,
    description: (
      <>
        In Ballistix, players guard their goal while simultaneously trying to
        land goals on their opponents' sides. Players can choose from soccer,
        hockey, or water polo themes.
        <br />
        <br />
        Don&apos;t be fooled by the resolution of your screen, every player has
        the same size for their goal.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 4,
  },
  {
    name: "Spring Thing",
    slug: "spring-thing",
    visible: true,
    year: 2006,
    description: (
      <>
        A hurricane strikes Mushroom Kingdom, and it&apos;s up to Mario, Luigi,
        Peach, and Bowser to face the forces of nature in a challenge to see who
        can stand the largest gust of wind. In Spring Thing, players jump over
        the boxes to avoid them or jump on top of the boxes to push them
        downwards. Players can also collect lives and other special bonus items.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Yahtzee",
    slug: "yahtzee",
    visible: true,
    year: 2010,
    description: (
      <>
        Yahtzee is a digital implementation of the classic board game of the
        same name.
        <br />
        <br />
        <small>
          My Grade 12 Computer Science partner, Christopher Pashartis, and
          myself created it as a final project for the course.
        </small>
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Carrier Owl",
    slug: "carrier-owl",
    visible: true,
    year: 2019,
    description: (
      <>
        An assistant for sending out personalized invitations. Users can
        configure messages to be sent out on a recurring basis to a list of
        guests.
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/carrier-owl",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Letterboard",
    slug: "letterboard",
    visible: true,
    year: 2019,
    description: (
      <>
        Letterboard is a simple web application used to count the number of
        characters used in a short message for a letterboard.
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "http://letterboard.revolutiontech.ca/",
        description: "Try Letterboard",
      },
      {
        url: "https://github.com/RevolutionTech/letterboard",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "BG Teach",
    slug: "bg-teach",
    visible: true,
    year: 2022,
    description: (
      <>
        A simple checklist app for the purpose of faciliating the teaching
        experience of more complex board games.
      </>
    ),
    platforms: [Platform.WEB],
    additionalLinks: [
      {
        url: "http://bgteach.revolutiontech.ca/",
        description: "View Site",
      },
      {
        url: "https://github.com/RevolutionTech/bg-teach",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Mockingbird",
    slug: "mockingbird",
    visible: true,
    year: 2020,
    description: (
      <>
        A simple Discord bot that provides random values for virtual games.
        Mockingbird can select random users from a server, divide users into
        teams, and even generate random messages for the game Decrypto.
      </>
    ),
    platforms: [Platform.WINDOWS, Platform.MACOS, Platform.LINUX],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/mockingbird",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Dutch Blitz Sidekick",
    slug: "dutch-blitz-sidekick",
    visible: true,
    year: 2012,
    description: (
      <>
        A simple app to keep track of each player&apos;s score in the card game
        Dutch Blitz.
      </>
    ),
    platforms: [Platform.ANDROID],
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/dutch-blitz-sidekick",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Tree Obviator",
    slug: "tree-obviator",
    visible: true,
    year: 2005,
    description: (
      <>
        In Tree Obviator, players control a person running through the woods. On
        the journey, players will find bonuses to increase points, slow down or
        speed up the game, and even destroy all the trees currently on the
        screen. The game goes on forever until the player hits a tree.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Asteroids",
    slug: "asteroids",
    visible: true,
    year: 2006,
    description: (
      <>
        An implementation of the arcade classic. Just as in the original, shoot
        at the asteroids to make them break into smaller pieces and gain points.
        Remember not to get hit by the asteroids, last as long as you can.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Jewel Hunter",
    slug: "jewel-hunter",
    visible: true,
    year: 2006,
    description: (
      <>
        In Jewel Hunter, players play as an adventurer trying to collect all of
        the diamonds in a series of dungeons.
        <br />
        <br />
        <small>
          One level of Jewel Hunter claims to be shaking due to earthquakes
          created by the final boss, but in reality this was due to a glitch I
          couldn&apos;t fix at the time and I simply made up a false
          explanation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "3D Maze",
    slug: "3d-maze",
    visible: true,
    year: 2005,
    description: (
      <>
        The vibe is Windows 95 screensaver in this simple first-person maze
        game.
        <br />
        <br />
        <small>3D Maze was my first attempt at making a game in 3D.</small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Platform Time",
    slug: "platform-time",
    visible: false,
    year: 2004,
    description: (
      <>
        Platform Time is a simple retro platform game.
        <br />
        <br />
        <small>
          This was the first platform game I made, and where I first understood
          how to create gravity and a moving camera for platform games. There
          are three cheat codes that can be used in the game, but I&apos;m not
          telling!
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Maze Daze",
    slug: "maze-daze",
    visible: false,
    year: 2004,
    description: (
      <>
        In Maze Daze, players control an adventurer navigating through a series
        of dungeons.
        <br />
        <br />
        <small>
          Maze Daze was the first maze game I ever made. There are a variety of
          flaws, but at least it&apos;s fairly simple to play.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Lunar Lander",
    slug: "lunar-lander",
    visible: true,
    year: 2013,
    description: (
      <>
        Lunar Lander is an implementation of the classic arcade game where you
        attempt to battle momentum in order to land the ship on one of the
        available platforms. Every level is procedurally generated.
      </>
    ),
    platforms: [Platform.LINUX],
    minPlayers: 1,
    maxPlayers: 1,
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/lunar-lander",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Brick",
    slug: "brick",
    visible: false,
    description: (
      <>
        Brick is another implementation of the classic retro game (also known as
        Breakout). Simply use the paddle at the bottom of the screen to help
        control where the ball will go, to destroy all of the blocks on the
        screen. Once all of the blocks are destroyed, players will advance to
        the next level.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Pong",
    slug: "pong",
    visible: false,
    description: (
      <>
        Players control the paddle to prevent the ball from going in on their
        side. The first player to ten points wins. Players can play against the
        computer, or another human player.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 2,
  },
  {
    name: "django-pigeon",
    slug: "django-pigeon",
    visible: true,
    year: 2017,
    description: (
      <>
        django-pigeon provides some basic test utilities for Django projects,
        particularly to simplify the task of testing that certain endpoints
        render without errors.
        <br />
        <br />
        <small>
          I would not suggest using django-pigeon for most Django projects, but
          in certain cases it can be useful.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS, Platform.MACOS, Platform.LINUX],
    additionalLinks: [
      {
        url: "https://pypi.org/project/django-pigeon/",
        description: "View on PyPI",
      },
      {
        url: "https://github.com/RevolutionTech/django-pigeon",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Pacman's Back in Red",
    slug: "pacmans-back-in-red",
    visible: false,
    year: 2004,
    description: (
      <>
        Pacman&apos;s Back in Red is a platform game featuring a red version of
        the classic video game character. Jump to the top of each level,
        blasting away any monsters in your way with Pac-Dots. In later levels,
        players will need to collect all the atoms in the level to proceed.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Flag Frenzy",
    slug: "flag-frenzy",
    visible: false,
    description: (
      <>
        Flag Frenzy would seem incredibly arbitrary at first glance. Players
        travel from level to level defeating zombies and can play as either a
        British or Turkish flag.
        <br />
        <br />
        <small>
          The truth is that I made this game as a gift for an engaged couple
          using limited information I knew about them. The flowers the British
          flag shoots out are trademarked by the bride, and the guitar that the
          Turkish flag plays is a picture of the groom&apos;s guitar. The
          background music is &apos;their song&apos;.
          <br />
          <br />
          This game is dedicated to Mr. and Mrs. Yetkiner.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Walls of Pure Evil",
    slug: "walls-of-pure-evil",
    visible: false,
    description: (
      <>
        Players play as a skull searching for hidden wall creatures within their
        surroundings. Sometimes the creatures will camouflage with the true
        walls. Once gathering all of the wall creatures, they must be destroyed!
        <br />
        <br />
        <small>
          I&apos;ll be the first to admit: Walls of Pure Evil is a very strange
          game. The way this game was designed was rather foolish in hindsight
          and the end result really doesn&apos;t make that much sense.
          Regardless, the game avoided the dust bin because it is fairly unique
          once you wrap your head around it.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Catch the Clown",
    slug: "catch-the-clown-nai",
    visible: false,
    year: 2003,
    description: (
      <>
        Catch the Clown is a simple clicking game where the object is to click
        on the clowns without clicking on the evil clowns. The clowns get faster
        when you click them, and the real clowns need to be clicked twice. If a
        clown manages to get invincibility players won&apos;t be able to click
        on it for 30 seconds.
        <br />
        <br />
        <small>
          Catch the Clown was originally designed by Mark Overmars as a tutorial
          for Game Maker. This is just my implementation.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Runaway Dog",
    slug: "runaway-dog",
    visible: false,
    year: 2003,
    description: (
      <>
        Runaway Dog is another catching game featuring a dog and cat running on
        the loose.
        <br />
        <br />
        <small>
          I made this game in elementary school. The dog was drawn by a friend
          who wanted to see her picture appear in a game.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Butterfly Blaster",
    slug: "butterfly-blaster",
    visible: false,
    year: 2003,
    description: (
      <>
        Click on the keys to start. Then, click on the butterflies that appear
        to gather up points. When you need a break, click the stop sign, and the
        time and butterflies will stop.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Money Maker",
    slug: "money-maker",
    visible: false,
    description: (
      <>
        Money Maker is a different catching &amp; clicking game that&apos;s
        really unique. Instead of hunting for the specific object, there are
        tons of coins flowing down the screen, and the object is to click on the
        largest coins to get the most amount of money. Players can advance to
        the next level when ready by clicking on the dynamite.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Mario Catcher",
    slug: "mario-catcher",
    visible: false,
    year: 2004,
    description: (
      <>
        Mario Catcher is another remake of the Catch the Clown game. This time
        players are catching Mario and Luigi, with Bowser as the villain.
        <br />
        <br />
        The complexity progresses slightly in this game. For example, every once
        and a while there is a bonus round to allow the player to gather up
        extra points.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Fish Catching",
    slug: "fish-catching",
    visible: false,
    description: (
      <>
        Fish Catching is the most complex of these clicking games. There are all
        kinds of bonus interactions all over the place and a variety of
        different levels.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Catch Your Own",
    slug: "catch-your-own",
    visible: false,
    description: (
      <>
        Catch Your Own is a customizable version of the original Catch the Clown
        game created by Mark Overmars. You can make the player click on dogs,
        fish, or whatever you want! You can also customize the background,
        background music, sound effects, and even the walls.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Car Shooter",
    slug: "car-shooter",
    visible: false,
    description: (
      <>
        Car Shooter is a simple game where the player&apos;s objective is to
        shoot at the cars which appear on the street without getting caught by
        the cops.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Helicopter Chase",
    slug: "helicopter-chase",
    visible: false,
    description: (
      <>
        In Helicopter Chase, players shoot down as many helicopters as they can
        in many different levels.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Shooter",
    slug: "shooter",
    visible: false,
    description: (
      <>
        In Shooter, players click to fire at the vehicles passing over the
        horizon and try to destroy them.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Smiley the Smiley",
    slug: "smiley-the-smiley",
    visible: false,
    year: 2004,
    description: (
      <>
        In Smiley the Smiley players control a small smiley face in a maze and
        defeat the enemies by punching them. Players proceed to the next level
        by hitting the flag.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Pacman's Back For Those Dots!",
    slug: "pacmans-back-for-those-dots",
    visible: false,
    description: (
      <>
        Pacman&apos;s Back For Those Dots! was inspired by the classic game
        Snake. Players travel through the level and collect the dots as they
        appear. Each dot is worth a different amount of points.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Whack-A-Mole",
    slug: "whack-a-mole",
    visible: false,
    year: 2003,
    description: (
      <>
        Whack-A-Mole is a simple game where the object is to whack the moles
        over the head! Players click on the moles to defeat them, but should
        keep their eyes peeled for the ghost moles, which can be tricky!
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Bumblebee",
    slug: "bumblebee",
    visible: false,
    year: 2013,
    description: (
      <>
        Bumblebee is a small program for creating simple patterns (can be good
        for drawing flowers or similar shapes).
        <br />
        <br />
        <small>
          The project was created for an assignment in CS 349 (User Interfaces).
        </small>
      </>
    ),
    platforms: [Platform.LINUX],
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/bumblebee",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Tic-Tac-Toe",
    slug: "tic-tac-toe-java",
    visible: false,
    year: 2013,
    description: (
      <>
        Yet another version of Tic-Tac-Toe.
        <br />
        <br />
        <small>
          This version was created in Java for CS 349 (User Interfaces) using a
          Model-View-Controller design pattern. There is a Java desktop client
          as well as an Android client, which both run the same model code.
        </small>
      </>
    ),
    platforms: [Platform.LINUX, Platform.ANDROID],
    minPlayers: 2,
    maxPlayers: 2,
    screenshotCaptions: {
      "tic-tac-toe-java":
        "This is the Java client of the game running on Linux.",
      "tic-tac-toe-android":
        "This is the Android version of the game running on a Galaxy Nexus.",
    },
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/tic-tac-toe",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Tic-Tac-Toe (4x4)",
    slug: "tic-tac-toe-4x4",
    visible: false,
    year: 2010,
    description: (
      <>
        Tic-Tac-Toe (4x4) is another version of Tic-Tac-Toe, but where players
        must get 4 symbols in a row.
        <br />
        <br />
        <small>
          I made this version in Adobe Flash in accordance with a Grade 12
          Computer Science project
        </small>
        .
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Super Smash Brothers Brawl: Memory Edition",
    slug: "ssbb-memory-edition",
    visible: false,
    year: 2010,
    description: (
      <>
        Super Smash Brothers Brawl: Memory Edition is an implementation of the
        classic game Concentration. In this edition, players watch where the
        various Nintendo characters are and select both of them to eliminate
        both of their cards. To win, all the cards must be removed from the
        game.
        <br />
        <br />
        <small>
          I created this game for a Grade 12 Computer Science project
        </small>
        .
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Memory Match",
    slug: "memory-match",
    visible: false,
    description: (
      <>
        Memory Match is a straightforward implementation of Concentration.
        Simply pay attention to which colours are where, and select them in
        order.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Switchy-Switchy",
    slug: "switchy-switchy-nai",
    visible: false,
    description: (
      <>
        Switchy-Switchy is an implementation of the common game known as Three
        Card Monte where the object is to find the location of the pea, or in
        this case diamond, among the shells it is hidden in. This version plays
        out differently each time.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Tug-O-War",
    slug: "tug-o-war",
    visible: false,
    description: (
      <>
        This game is a very simple implementation of the classic we know as Tug
        of War (or Tug-O-War). The object is to pull your opponent into the
        river in the centre by repeatedly pressing one of the keys on the
        keyboard.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 2,
  },
  {
    name: "Poison Penny",
    slug: "poison-penny",
    visible: false,
    year: 2009,
    description: (
      <>
        Poison Penny is an implementation of basic childhood game where the
        objective is to get the other player to take the last penny.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "My Desktop",
    slug: "my-desktop",
    visible: false,
    year: 2009,
    description: (
      <>
        My Desktop is a personalizable kitchen sink of various widgets. Users
        can add pictures, music, notes, to-do lists, and similar information to
        personalize their own space. Multiple people can use the program with
        their own accounts with their own information.
        <br />
        <br />
        <small>
          I created My Desktop for my summative project in grade 11 computer
          science.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Shrek Adventure Game",
    slug: "shrek-adventure-game-nai",
    visible: false,
    year: 2003,
    description: (
      <>
        Shrek Adventure Game follows the cast of Shrek characters through the
        story of the first film.
        <br />
        <br />
        <small>
          Shrek Adventure Game was the very first computer game I ever created
          (and finished). This entry is here purely for posterity, I
          wouldn&apos;t actually recommend playing this game unless you wish to
          make fun of my early work. Hey&hellip; we all start somewhere, right?
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Eyes",
    slug: "eyes",
    visible: false,
    description: (
      <>
        Eyes is an implementation of the classic program that follows the cursor
        around with the motion of the pupils.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Lotto 649 Ticket Generator",
    slug: "lotto-649-ticket-generator",
    visible: false,
    year: 2009,
    description: (
      <>
        Lotto 649 Ticket Generator randomly generates values appropriate for
        entering on a Lotto 649 ticket.
        <br />
        <br />
        <small>
          I developed this program when I got tired of my parents asking me to
          pick numbers for their next lottery ticket.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Lotto 649 Simulator",
    slug: "lotto-649-simulator",
    visible: false,
    year: 2009,
    description: (
      <>
        Lotto 649 Simulator simulates the results of playing the Lotto 649.
        <br />
        <br />
        <small>
          Running the program repeatedly by holding ALT+R reminds me why I do
          not play lottery games.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Dice Roll Simulator",
    slug: "dice-roll-simulator",
    visible: false,
    year: 2009,
    description: (
      <>
        Dice Roll Simulator simulates the rolling of 2 dice. It loops 250 times
        and displays the results of totals continuously until it has completed.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Jumble",
    slug: "jumble",
    visible: false,
    year: 2009,
    description: (
      <>
        Jumble is a simple word game that requires one player to unscramble the
        word entered by another player.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Guess the Number",
    slug: "guess-the-number",
    visible: false,
    year: 2008,
    description: (
      <>
        Guess the Number is a classic game where players try to guess the number
        between 1 and 100 that the computer has randomly selected. The game
        keeps track of your wrong guesses, but gives you slight hints along the
        way.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Guessing Closer To",
    slug: "guessing-closer-to",
    visible: false,
    year: 2008,
    description: (
      <>
        In Guessing Closer To, two players attempt to guess the
        randomly-selected three digit number selected by the program. Whoever is
        closest without going over wins!
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Rock, Paper, Scissors!",
    slug: "rock-paper-scissors",
    visible: false,
    year: 2008,
    description: (
      <>
        Rock, Paper, Scissors! is an implementation of the childhood classic
        game. In this version, players play against the computer.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
];
export const PROJECT_MAP = keyBy(PROJECT_LIST, "slug");
