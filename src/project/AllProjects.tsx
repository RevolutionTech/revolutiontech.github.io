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
        PerDiem is the brainchild of Brandon Nelson; I created the backend of
        the website.
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
        The website was built on top of a Creative Commons HTML template; I
        cannot claim any credit for the design.
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
        Esprit&apos;s Labyrinth was created as an Independent Study Unit project
        in my grade 12 Communications Technology class and won first place in
        the Interactive Game category of the &apos;10 Cawthra Animation
        Festival.
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
        "The contest page where users can view photos that have been submitted to the contest.",
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
        <br />I created this for a party in 2015, but restaurant owners could
        deploy Seared Quail in their restaurants to improve efficiency and
        communication of orders.
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
        Blockade was a project created as a result of an Independent Study Unit
        project in my grade 11 Communications Technology class. Blockade won
        first place in the Interactive Game category of the &apos;09 Cawthra
        Animation Festival.
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
        In Evil Clutches, you control a dragon parent who must collect his/her
        young from the evil boss. Watch out for demons which the boss will
        launch at you without warning. There are also power-ups to help you
        survive and collect your children.
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
        Galactic Mail is a simple space-themed game where you must travel to all
        of the moons on the screen to deliver mail to each one. After all of the
        mail is delivered, you can then travel to the planet to proceed to the
        next level.
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
        What would happen if an evil villain had access to a pit at the bottom
        of machinery capable of dropping heavy blocks on top of you? Lazarus
        would happen! Play as the friendly blob Lazarus as he tries to use the
        blocks to his advantage puzzling his way out of the pit and stop the
        machinery!
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
        Memories of the classic Breakout should arise as you play through this
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
        Koala-BR8 really makes you think. You control the movement of several
        separated koalas simultaneously through a maze, and they all must reach
        an exit without a single one being eliminated.
        <br />
        <br />I intended on creating an additional 6 levels of a higher
        difficulty, but that was never completed.
        <br />
        <br />
        <small>
          Koala-BR8 was originally designed by Mark Overmars and Jacob Habgood
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
    name: "Wingman Sam",
    slug: "wingman-sam",
    visible: false,
    year: 2006,
    description: (
      <>
        Grab a friend and take down the opposing planes in Wingman Sam! Fire at
        the planes as they come to attack you in preparation for the final boss
        battle. Be careful though, if one of you is lost in action, the game is
        over.
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
        Tank War is a multi-player shooting game where each player controls a
        tank. Travel around the map to find your opponent and defeat them, there
        are various power-ups available to use to defeat your opponent.
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
        It&apos;s Tic-Tac-Toe: get three symbols of your kind in a row, column,
        or diagonal to win! You may notice that instead of X&apos;s and
        O&apos;s, Game Maker logos are used.
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
        In Pyramid Panic, you control an explorer searching for an ancient
        treasure called the "Sword of RA". To get there, you must avoid giant
        scorpions and beetles, and destroy mummies. Only those who have ever
        held the "Sword of RA" know its true power. Will you?
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
        The game of Acid Drop is simple. Watch the light for a colour, and run
        to it as fast as you can! You must reach the correctly coloured block
        before the rest sink into the acid or you will face a painful burning
        sensation. Ouch! After the blocks have been in the acid long enough, the
        colours begin to burn away and you have to remember which block belongs
        to which colour.
        <br />
        <br />
        Acid Drop was inspired by the Mario Party mini-game Mushroom Mix-Up.
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
        Do you remember the occasional boss battles in Super Mario Brothers 3 at
        the end of each fortress? This game is dedicated to reliving those
        moments of the game by challenging you with an unstoppable Boom-Boom.
        Try to live as long as you can and see how many times you can hit
        Boom-Boom on the head. Watch out though, he can get quite vicious!
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
        Soccer, Hockey, and Water Polo, all in one! The competition? Farm
        animals. It&apos;s Ballistix! Guard your goal and try to shoot into
        another player&apos;s goal to get them out. Up to 4 people can play.
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
        When a hurricane strikes Mushroom Kingdom, it&apos;s up to Mario, Luigi,
        Peach, and Bowser to face the wind in a challenge to see who can stand
        the largest gust of wind. Jump over the boxes to avoid them, you can
        also jump on top of them to push them downwards. You can also collect
        lives and other special bonus items. Oh, and about the background
        music... don&apos;t ask.
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
        My Grade 12 Computer Science partner, Christopher Pashartis, and myself
        created it as a final project for the course. You have the ability to
        play with up to four players, and can also store high scores in the high
        score table which is saved locally.
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
        Your sidekick to playing the card game Dutch Blitz! A simple app to keep
        track of each player&apos;s score, designed to be quick and keep the
        game going.
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
        In Tree Obviator, you control a person running through the woods. On
        your journey, you will find bonuses which you can collect to increase
        your points, slow down or speed up the game, and even destroy all the
        trees currently on the screen. The game goes on forever until you hit a
        tree.
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
        My implementation of the classic arcade game. Just as in the original,
        shoot at the asteroids to make them break into smaller pieces and gain
        points. Remember not to get hit by the asteroids, last as long as you
        can.
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
        Get in. Get the diamonds. Then get out. They sure made it seem like a
        simple enough mission. But will it really be that easy?
        <br />
        <br />
        One level of Jewel Hunter claims to be shaking due to earthquakes
        created by the final boss, but in reality this was due to a glitch I
        couldn&apos;t fix at the time and I simply made up a false explanation.
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
        3D Maze was my first attempt at a 3D game. This game will definitely
        give you Windows 95 screensaver vibes.
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
        Platform Time was the first platform game I made, and this was where I
        first understood how to create gravity and a moving camera for platform
        games. There are three cheat codes that can be used in the game, but
        I&apos;m not telling!
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
        Maze Daze was the first maze game I ever made. There are a variety of
        flaws, but at least it&apos;s fairly simple to play.
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
        screen. Once you&apos;ve destroyed all of the blocks, you will pass the
        level.
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
        Pong. Everyone knows this game. Control the paddle to avoid the ball
        from going in on your side. The first player to ten points wins. Play
        against the computer, or another human player.
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
        <br />I would not suggest using django-pigeon for most Django projects,
        but in certain cases it can be useful.
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
        you will need to collect all the atoms in the level to proceed.
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
        Flag Frenzy would seem incredibly arbitrary at first glance. You can
        play as either a British flag, or Turkish flag and destroy zombies
        travelling from level to level. The truth is, I made this game as a gift
        for a couple that was getting married using limited information I knew
        about them. The flowers the British flag shoots out are trademarked by
        the bride, and the guitar that the Turkish flag plays is a picture of
        the groom&apos;s guitar. The background music is &apos;their song&apos;.
        <br />
        <br />
        This game is dedicated to Mr. and Mrs. Yetkiner.
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
        Play as the skull and find the hidden wall creatures within your
        surroundings. Sometimes they will camouflage with the true walls. Once
        you&apos;ve gathered all of the wall creatures, you must burn them all!
        <br />
        <br />
        I&apos;ll be the first to admit: Walls of Pure Evil is a very strange
        game. The way this game was designed was rather foolish in hindsight and
        the end result really doesn&apos;t make that much sense. Regardless, the
        game avoided the dust bin because it is fairly unique once you wrap your
        head around it.
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
        The simplest version of the catching games I provide. Catch the Clown is
        a simple clicking game where the object is to click on the clowns
        without clicking on the evil clowns. The clowns get faster when you
        click them, and the real clowns need to be clicked twice. Oh, and
        don&apos;t let a clown get invincibility or you won&apos;t be able to
        click on it for 30 seconds.
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
        Runaway Dog is another remake of the Catch the Clown game I made while
        in elementary school. This one includes a dog and a cat running on the
        loose.
        <br />
        <br />
        The dog was drawn by a friend who wanted to see her picture appear in a
        game.
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
        Money Maker is a different Catching & Clicking game that&apos;s really
        unique. Instead of hunting for the specific object, there are tons of
        coins flowing down the screen, and the object is to click on the largest
        coins to get the most amount of money. Go to the next level when
        you&apos;re ready by clicking on the dynamite.
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
        you&apos;re catching Mario and Luigi, with Bowser as the villain.
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
        My final catching game, Fish Catching. This game is the most complex of
        the clicking games. There are all kinds of bonus interactions all over
        the place and a variety of different levels.
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
        shoot at the cars which appear on the street. Don&apos;t let the cops
        catch you!
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
        It&apos;s time to take revenge on the helicopters! Fire! Shoot down as
        many helicopters as you can in many different levels.
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
        Watch many vehicles pass the horizon and shoot them down! Click to fire
        at the vehicles and destroy them.
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
        In Smiley the Smiley you control a small smiley face in a maze and
        defeat the enemies by punching them. You can proceed to the next level
        by hitting the flag in each level.
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
        Snake. Travel through the level and collect the dots as you see them.
        Each dot is worth a different amount of points.
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
        over the head! Click on the moles to defeat them, but keep your eye out
        for the ghost moles, which will try to trick you!
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
        for drawing flowers or similar shapes). The project was created for an
        assignment in CS 349 (User Interfaces).
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
        Yet another version of Tic-Tac-Toe. This version was created in Java for
        CS 349 (User Interfaces) using a Model-View-Controller design pattern.
        There is a Java desktop client as well as an Android client, which both
        run the same model code.
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
        Tic-Tac-Toe (4x4) is another version of Tic-Tac-Toe that I created. I
        made this version in Adobe Flash in accordance with a Grade 12 Computer
        Science project.
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
        classic game Concentration. In this edition, watch where the various
        Nintendo characters are and select both of them to eliminate both of
        their cards. You win once all the cards are removed from the game.
        <br />
        <br />I created this game for a Grade 12 Computer Science project.
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
        My Desktop is your personal kitchen sink. You can add pictures, music,
        notes, to-do lists, and similar information to personalize your own
        space. Multiple people can use the program with their own accounts with
        their own information. I created My Desktop for my summative project in
        grade 11 computer science.
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
        Shrek Adventure Game was the very first game I ever created (and
        finished).
        <br />
        <br />
        This game is here purely for posterity, I wouldn&apos;t actually
        recommend playing this game unless you wish to make fun of my early
        work. Hey&hellip; we all start somewhere, right? The version released
        here is actually a slightly revised version that improves some bugs,
        player mechanics, and some of the graphics. That&apos;s right, it used
        to be even worse!
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
        entering on a Lotto 649 ticket. I developed this program when I got
        tired of my parents asking me to pick numbers for their next lottery
        ticket.
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
        Running the program repeatedly by holding ALT+R reminds me why I do not
        play lottery games.
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
        Jumble is a simple word game that requires you to unscramble the word
        entered by another player.
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
        Guess the Number is a classic game where you try to guess the number
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
        game. In this version, you play against the computer.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
];
export const PROJECT_MAP = keyBy(PROJECT_LIST, "slug");
