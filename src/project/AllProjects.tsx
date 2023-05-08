import * as React from "react";
import keyBy from "lodash/keyBy";

import { Platform, Project } from "./project";

export const PROJECT_LIST: Project[] = [
  {
    name: "Letter Joy",
    slug: "letter-joy",
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
        . Players will ultimately need to form a secret word from the letters
        they are dealt without ever looking at the letters they have. Players do
        this by interpreting clues given to them by other players.
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
    year: 2016,
    description: (
      <>
        PerDiem is an equity crowdfunding platform for musicians. Artists can
        raise money for projects by giving back a percentage of their revenue to
        the investors that fund them. Perdiem is the brainchild of Brandon
        Nelson; I created the backend of the website.
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
    name: "Esprit's Labyrinth",
    slug: "esprits-labyrinth",
    year: 2010,
    description: (
      <>
        Esprit&apos;s Labyrinth is an action-packed adventure of a man and his
        ambitious companion. Esprit&apos;s Labyrinth is packed with amusing
        puzzles, bloodthirsty monsters, and a plot-twisting storyline.
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
    name: "Flamingo",
    slug: "flamingo",
    year: 2015,
    description: (
      <>
        Flamingo is a photography contest web application. Users can submit
        their photos to contests and vote on their favourites.
      </>
    ),
    platforms: [Platform.WEB],
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
    year: 2015,
    description: (
      <>
        Seared Quail is a digital restaurant menu and order management web
        application. Restaurant owners can deploy Seared Quail in their
        restaurants to improve efficiency and communication of orders, for
        example.
      </>
    ),
    platforms: [Platform.WEB],
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
    year: 2014,
    description: (
      <>
        django-conditions is a Django app that allows creation of conditional
        logic in admin. Some possible use cases include segmenting your user
        base into cohorts with targeted messaging, and providing different
        rewards to users depending on their expected value.
      </>
    ),
    platforms: [Platform.WEB, Platform.WINDOWS, Platform.MACOS, Platform.LINUX],
    additionalLinks: [
      {
        url: "http://django-conditions.readthedocs.org/",
        description: "View Documentation",
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
    year: 2009,
    description: (
      <>
        Blockade was a project created as a result of an Independent Study Unit
        project in my grade 11 Communications Technology class. The idea spawned
        from the basic mechanics of Tetris, and evolved into a structure where
        the object is to match blocks of the same shape and/or colour in a
        horizontal or vertical row of three blocks. Blockade won first place in
        the Interactive Game category of the &apos;09 Cawthra Animation
        Festival.
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
    name: "Hummingbird",
    slug: "hummingbird",
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
    year: 2006,
    description: (
      <>
        The game of Acid Drop is simple. Watch the light for a colour, and run
        to it as fast as you can! You must reach the correctly coloured block
        before the rest sink into the acid or you will face a painful burning
        sensation. Ouch! After the blocks have been in the acid long enough, the
        colours begin to burn away and you have to remember which block belongs
        to which colour.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Attack of the Boom-Boom",
    slug: "attack-of-the-boom-boom",
    year: 2006,
    description: (
      <>
        Do you remember the occasional boss battles in Super Mario Brothers 3 at
        the end of each fortress? This game is dedicated to reliving those
        moments of the game by challenging you with an unstoppable Boom-Boom.
        Try to live as long as you can and see how many times you can hit
        Boom-Boom on the head. Watch out though, he can get vicious!
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Ballistix",
    slug: "ballistix",
    year: 2005,
    description: (
      <>
        Soccer, Hockey, and Water Polo, all in one! The competitors? Farm
        animals. It&apos;s Ballistix! Play a common game of guard your goal, and
        try to shoot into another player&apos;s goal to get them out! Up to 4
        people can play. Don&apos;t be fooled by the resolution of your screen,
        every player has the same size for their goal.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 4,
  },
  {
    name: "Evil Clutches",
    slug: "evil-clutches",
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
          Evil Clutches is one of the nine games Revolution Games did not
          create. They were originally created by Mark Overmars, and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>.
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
    year: 2006,
    description: (
      <>
        Galactic Mail is a simple space-themed game where you must travel to all
        of the moons on the screen to deliver all of the mail to each one in
        order to pass the level. After all of the mail is delivered, you can
        then travel to the planet to pass.
        <br />
        <br />
        <small>
          Galactic Mail is one of the nine games Revolution Games did not
          create. They were originally created by Mark Overmars, and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>.
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
          Lazarus is one of the nine games Revolution Games did not create. They
          were originally created by Mark Overmars, and Jacob Habgood for{" "}
          <em>The Game Maker&apos;s Apprentice</em>.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Spring Thing",
    slug: "spring-thing",
    year: 2006,
    description: (
      <>
        Spring Thing! This game is considered one of my better simple creations.
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
    name: "Super Rainbow Reef",
    slug: "super-rainbow-reef",
    year: 2006,
    description: (
      <>
        Memories of the classic Breakout should arise as you play through this
        game. Super Rainbow Reef is similar to the classic game with a lot of
        new features and of course brand new graphics and music to a reef theme.
        <br />
        <br />
        <small>
          Super Rainbow Reef is one of the nine games Revolution Games did not
          create. They were originally created by Mark Overmars, and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Dutch Blitz Sidekick",
    slug: "dutch-blitz-sidekick",
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
    year: 2005,
    description: (
      <>
        In Tree Obviator, you control a person running through the woods, which
        you see in a three-dimensional perspective. As you run through the
        woods, you will find bonuses which you can collect to increase your
        points, slow down or speed up the game, and even destroy all the trees
        currently on the screen. The game goes on forever until you hit a tree.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "3D Maze",
    slug: "3d-maze",
    year: 2005,
    description: (
      <>
        3D Maze was my first attempt at a 3D game. It is relatively glitchy,
        however for a first attempt I still think it&apos;s kind of
        interesting... although you might have a hard time getting the average
        person to play it for more than about 5 minutes.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Jewel Hunter",
    slug: "jewel-hunter",
    year: 2006,
    description: (
      <>
        Jewel Hunter is a standard maze game where you must collect all the
        diamonds in the level in order to pass it. Jewel Hunter features ten
        levels which all include something new in each with the exception of the
        final level where it is four times the normal size and includes
        everything you have encountered so far. This level claims to be shaking
        due to earthquakes created by the upcoming boss in the next level, but
        in reality this was due to a glitch I couldn&apos;t fix at the time and
        I simply made up a false explanation. An interesting feature in the game
        is you have the ability to choose between playing as a human, or as
        Pac-Man.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Koala-BR8",
    slug: "koala-br8",
    year: 2006,
    description: (
      <>
        Koala-BR8 is a very entertaining maze game which really makes you think.
        You must control a group of koalas at one time, and they all must reach
        an exit without a single one being killed. I intended on creating an
        additional 6 levels of a higher difficulty, but that was never
        completed.
        <br />
        <br />
        <small>
          Koala-BR8 is one of the nine games Revolution Games did not create.
          They were originally created by Mark Overmars, and Jacob Habgood for{" "}
          <em>The Game Maker&apos;s Apprentice</em>.
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
    year: 2006,
    description: (
      <>
        Pyramid Panic is a unique maze game with plenty of interesting features.
        You control an explorer searching for an ancient treasure called the
        "Sword of RA". To get there, you must avoid giant scorpions and beetles,
        and destroy mummies. Only those who have ever held the "Sword of RA"
        know its true power. Will you?
        <br />
        <br />
        <small>
          Pyramid Panic is one of the nine games Revolution Games did not
          create. They were originally created by Mark Overmars, and Jacob
          Habgood for <em>The Game Maker&apos;s Apprentice</em>.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Platform Time",
    slug: "platform-time",
    year: 2004,
    description: (
      <>
        Platform Time was the first platform game I made, and this was where I
        first understood how to create gravity and a moving camera for platform
        games. Despite the year of creation, it actually happens to be a rather
        decent game. There are three cheat codes that can be used in the game as
        well, but I&apos;m not telling!
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Jumble",
    slug: "jumble",
    year: 2009,
    description: (
      <>
        Jumble is a simple thinking game that requires you to unscramble the
        word entered by another player.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Super Smash Brothers Brawl: Memory Edition",
    slug: "ssbb-memory-edition",
    year: 2010,
    description: (
      <>
        Super Smash Brothers Brawl: Memory Edition is another example of the
        classic game Concentration. In this edition, watch where the various
        Nintendo characters are and select both of them to eliminate both of
        their cards. You win the game once all the cards are removed from the
        game. I needed to create this game for a Grade 12 Computer Science
        project. The end result we were meant to create I found was extremely
        lame, so I significantly improved on mine.
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Asteroids",
    slug: "asteroids",
    year: 2006,
    description: (
      <>
        Remember Asteroids? Asteroids is often recognized as the first video
        game ever created (originally titled Spacewar!). Truly this video game
        masterpiece deserves a remake from Revolution Games. Fortunately,
        we&apos;ve done just that! Re-experience Asteroids as one of the
        greatest classic arcade game ever made. Just as in the original, shoot
        at the asteroids to make them break into smaller pieces and gain points.
        Remember not to get hit by the asteroids, last as long as you can.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Brick",
    slug: "brick",
    description: (
      <>
        Brick is another classic retro game also well known as Breakout. Simply
        use the paddle at the bottom of the screen to help control where the
        ball will go, to destroy all of the blocks on the screen. Once
        you&apos;ve destroyed all of the blocks, you will pass the level.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Lunar Lander",
    slug: "lunar-lander",
    year: 2013,
    description: (
      <>
        Lunar Lander is a remake of the classic arcade game where you attempt to
        battle momentum in order to land the ship on one of the available
        platforms. Every level is randomly generated.
      </>
    ),
    platforms: [Platform.LINUX],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Poison Penny",
    slug: "poison-penny",
    year: 2009,
    description: (
      <>
        Poison Penny is a basic childhood game where the objective is to get the
        other player to take the last penny.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Pong",
    slug: "pong",
    description: (
      <>
        Pong. Everyone knows this game. Control the paddle to avoid the ball
        from going in on your side. First to ten points wins. Play against the
        computer, or another human player.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 2,
  },
  {
    name: "Rock, Paper, Scissors!",
    slug: "rock-paper-scissors",
    year: 2008,
    description: (
      <>
        Rock, Paper, Scissors! is a childhood classic remade into a simple game
        against the computer.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Tic-Tac-Toe",
    slug: "tic-tac-toe",
    year: 2006,
    description: (
      <>
        Everyone knows how to play Tic-Tac-Toe, so just go ahead and start
        playing! Get three symbols of your kind in a row, column, or diagonal to
        win! You may notice that instead of X&apos;s and O&apos;s, Game Maker
        logos are used.
        <br />
        <br />
        <small>
          Tic-Tac-Toe is one of the nine games Revolution Games did not create.
          They were originally created by Mark Overmars, and Jacob Habgood for{" "}
          <em>The Game Maker&apos;s Apprentice</em>.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Tic-Tac-Toe",
    slug: "tic-tac-toe-java",
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
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/tic-tac-toe",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Yahtzee",
    slug: "yahtzee",
    year: 2010,
    description: (
      <>
        Yahtzee is an electronic version of the classic board game with the same
        name. My Grade 12 Computer Science partner, Christopher Pashartis and
        myself created it as a final project for the course. You have the
        ability to play with up to four players, and can also store high scores
        in the high score table which is saved locally.
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Tank War",
    slug: "tank-war",
    year: 2006,
    description: (
      <>
        Tank War is a fun multi-player shooting game where you play as tanks.
        Travel around the small maps to find your opponent and defeat them,
        there are various power-ups available to use to defeat your opponent.
        <br />
        <br />
        <small>
          Tank War is one of the nine games Revolution Games did not create.
          They were originally created by Mark Overmars, and Jacob Habgood for{" "}
          <em>The Game Maker&apos;s Apprentice</em>.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Wingman Sam",
    slug: "wingman-sam",
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
          Wingman Sam is one of the nine games Revolution Games did not create.
          They were originally created by Mark Overmars, and Jacob Habgood for{" "}
          <em>The Game Maker&apos;s Apprentice</em>.
        </small>
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Bumblebee",
    slug: "bumblebee",
    year: 2013,
    description: (
      <>
        Bumblebee is a small program for creating simple patterns (can be good
        for drawing flowers or similar shapes). The project was created for an
        assignment in CS 349.
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
];
export const PROJECT_MAP = keyBy(PROJECT_LIST, "slug");
