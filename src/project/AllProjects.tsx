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
    visible: true,
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
    visible: true,
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
        application. Restaurant owners can deploy Seared Quail in their
        restaurants to improve efficiency and communication of orders, for
        example.
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
        logic in admin. Some possible use cases include segmenting your user
        base into cohorts with targeted messaging, and providing different
        rewards to users depending on their expected value.
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
    visible: true,
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
    visible: false,
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
    visible: true,
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
    visible: false,
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
    visible: true,
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
    visible: true,
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
    visible: false,
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
    visible: false,
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
    visible: false,
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
    name: "Maze Daze",
    slug: "maze-daze",
    visible: false,
    year: 2004,
    description: (
      <>
        Maze Daze was the very first maze game I ever made. This game has many
        important elements missing, and poor mistakes in it, but it's a
        moderately entertaining simple maze game.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Jumble",
    slug: "jumble",
    visible: false,
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
    visible: false,
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
    visible: true,
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
    visible: false,
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
    visible: true,
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
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/lunar-lander",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Poison Penny",
    slug: "poison-penny",
    visible: false,
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
    visible: false,
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
    name: "Pacman's Back in Red",
    slug: "pacmans-back-in-red",
    visible: false,
    year: 2004,
    description: (
      <>
        Pacman's Back in Red is a platform game featuring a red version of the
        classic video game character, Pac-Man! Jump to the top of each level,
        blasting away any monsters in your way with Pac-Dots! In later levels,
        you will need to collect all the atoms in the level to pass.
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
        Flag Frenzy would probably seem like a completely random game at first
        glance. You can play as either a British flag, or Turkish flag and
        destroy zombies travelling from level to level. The truth is, I made
        this game for a couple that was getting married using information that I
        knew about them. The flowers the British flag shoots out are trademarked
        by the bride, and the guitar that the Turkish flag plays is a picture of
        the groom's guitar. The background music is 'their song'. This game is
        dedicated to Mr. and Mrs. Yetkiner.
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
        Pacman's Back For Those Dots! is essentially a remake of the classic
        Snake game. Travel through the level and collect the dots as you see
        them. Each dot is worth a different amount of points.
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
    name: "Rock, Paper, Scissors!",
    slug: "rock-paper-scissors",
    visible: false,
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
    visible: false,
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
    name: "Yahtzee",
    slug: "yahtzee",
    visible: true,
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
    visible: false,
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
    visible: false,
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
  {
    name: "Color Selector",
    slug: "color-selector",
    visible: false,
    year: 2012,
    description: <>A simple tool to inspire color selections.</>,
    platforms: [Platform.ANDROID],
    additionalLinks: [
      {
        url: "https://bitbucket.org/RevolutionTech/color-selector",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Walls of Pure Evil",
    slug: "walls-of-pure-evil",
    visible: false,
    description: (
      <>
        Walls of Pure Evil is a very strange game. The way this game was
        designed was rather foolish in hindsight. The end result really doesn't
        make that much sense. Regardless, it is available to play because once
        you understand the game, it actually can be somewhat entertaining. Play
        as the skull and find the hidden wall creatures within your
        surroundings. Sometimes they will camouflage with the true walls. Once
        you've gathered all of the wall creatures, you must burn them all!
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
        Car Shooter is a simple game where the player's objective is to shoot at
        the cars which appear on the street. Don't let the cops catch you!
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
        It's time to take revenge on the helicopters! Fire! Shoot down as many
        helicopters as you can in many different levels.
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
        Smiley the Smiley is an odd maze game. You control a small smiley face
        in a maze and defeat the enemies by punching them. You can proceed to
        the next level by hitting the flag in each level, you don't actually
        need to defeat all of the smilies first.
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
        Card Monte where the object is to find where the pea, or in this case,
        diamond is located among the shells it is hidden in. This version plays
        out differently every time you play.
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
        This game is a very simple version of the classic game we know as
        Tug-Of-War or Tug-O-War. You can play with one or two people where the
        object of the game is to pull your opponent into the river in the centre
        by tugging on the rope by pressing one of the keys on the keyboard. You
        can also play against computer players.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 2,
  },
  {
    name: "My Desktop",
    slug: "my-desktop",
    visible: false,
    year: 2009,
    description: (
      <>
        My Desktop is an interesting program that I created for my summative
        project in grade 11 computer science. My Desktop allows you to add
        accounts with pictures, music, notes, to-do lists, and similar
        information to personalize your own space. Of course, multiple people
        can use the program with their own accounts with their own information.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Tasks",
    slug: "tasks",
    visible: false,
    year: 2009,
    description: (
      <>
        Inspired from Douglas Coupland's novel JPod, Tasks is a simple program
        that I created as a tool for pursuing an experiment that I had titled
        "The Lucas Connors Social Experiment". After entering the names of all
        participants, the program randomly generates preset tasks for each
        person to do throughout the week (Note that the primary location for
        this is meant to be in a school). The tasks are silly random acts that
        are intended to get people confused or ask questions. Some tasks include
        "Take all speech literally" or "Burst into fake laughter when asked a
        question". The user of course can add his or her own tasks to the
        program if they wish.
      </>
    ),
    platforms: [Platform.WINDOWS],
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
        click them, and the real clowns need to be clicked twice. Oh, and don't
        let a clown get invincibility or you won't be able to click on it for 30
        seconds.
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
        the clicking games, but trust me, it is probably the most entertaining.
        There are all kinds of bonus things going all over the place, and it
        really keep your interest for a surprisingly long period of time.
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
        Money Maker is a different Catching & Clicking game that's really
        unique. Instead of hunting for the specific object, there are tons of
        coins flowing down the screen, and the object is to click on the largest
        coins to get the most amount of money. Go to the next level when you're
        ready by clicking on the dynamite.
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
        Mario Catcher is another remake of the Catch the Clown game. It plays
        with Mario, and Luigi, as well as Bowser for the evil part of the game.
        This version gets slightly more complex, but not by much. Every once and
        a while there is a bonus round to allow the player to gather up extra
        points!
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
        time and butterflies will stop. Once you wish to continue, you can press
        the keys again. The game is rather simple, and quite boring.
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
        Runaway Dog is another remake of the Catch the Clown game. This one
        includes a dog and a cat running on the loose.
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
        Catch Your Own is a special game based off of the original Catch the
        Clown game created by Mark Overmars. This game however is special,
        because you can customize your very own Catch the Clown game anyway you
        want to. You can make the player click on dogs, fish, or whatever you
        want! You can also customize the background, background music, sound
        effects, and even the walls.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Memory Match",
    slug: "memory-match",
    visible: false,
    description: (
      <>
        Memory Match is your classic game of Concentration. Simply pay attention
        to which colours are where, and select them in order. It's quite simple.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
  },
  {
    name: "Particle System",
    slug: "particle-system",
    visible: false,
    description: (
      <>
        Particle System is a simple program I developed while testing out
        particle effects in Game Maker.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Pascal's Triangle",
    slug: "pascals-triangle",
    visible: false,
    year: 2009,
    description: (
      <>
        If Pascal&apos;s Triangle does not sound familiar to you, then this
        program will not mean anything to you. However, if you are aware of
        Pascal&apos;s Triangle, you may catch interest in this program as it
        calculates several rows of the triangle automatically.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Eyes",
    slug: "eyes",
    visible: false,
    description: (
      <>
        Eyes is the classic program that follows the cursor around with the
        motion of the pupils.
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
        entering on a Lotto 649 ticket. I developed this program when I became
        too lazy to come up with numbers for my parents when they bought one.
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
        Lotto 649 Simulator simulates the results of financial difference when
        comparing the cost of buying Lotto 649 tickets with the odds of winning.
        I like running the program and holding ALT+R. It reminds me why I do not
        play lottery games.
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
        actually finished). This game is primarily here for historical purposes,
        and I'd strongly recommend not actually playing this game, unless you
        wish to make fun of my early work. Hey&hellip; we all start somewhere,
        right? The version released here is actually a slightly revised version
        that improves some bugs, player mechanics, and some of the graphics.
        (That's right, it used to be even worse!)
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    name: "Factor",
    slug: "factor",
    visible: false,
    year: 2008,
    description: (
      <>
        Factor is a simple program that determines the prime factorization of an
        entered value. In other words if the value is not prime, it will output
        the smallest values possible multiplied together to create the number of
        the entered value.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Fraction Reducer",
    slug: "fraction-reducer",
    visible: false,
    year: 2010,
    description: (
      <>
        <em>Fraction Reducer</em> is a great little program that takes fractions
        and puts them into lowest terms.
      </>
    ),
    platforms: [Platform.WEB],
  },
  {
    name: "Fibonacci Numbers",
    slug: "fibonacci",
    visible: false,
    year: 2010,
    description: (
      <>
        Fibonacci Numbers is a simple program that displays the Fibonacci number
        according to the inputted term. Note that this program naively uses
        recursion to find the solution for each term.
      </>
    ),
    platforms: [Platform.WEB],
  },
  {
    name: "n Choose R",
    slug: "n-choose-r",
    visible: false,
    year: 2010,
    description: (
      <>
        n Choose r is a useful little program that calculates inputted numbers
        using the n Choose r (nCr) function. If you're unfamiliar with nCr, it
        is a function that calculates how many possibilities exist in a
        situation where you can choose a given amount of objects from a given
        amount of possibilities. To better understand, you could calculate how
        many different card combinations you could pick up in an initial dealing
        of a game of Blackjack using a standard 52-card deck by calculating 52
        Choose 2. The answer here would be 1326. This program spares you the
        mathematics behind the function!
      </>
    ),
    platforms: [Platform.WEB],
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
        Guessing Closer To is a slight revision of the game Guess the Number.
        This time you play with a partner and try to guess the randomly-selected
        three digit number. Whoever gets the closest without going over wins.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 2,
    maxPlayers: 2,
  },
  {
    name: "Dice Roll Simulator",
    slug: "dice-roll-simulator",
    visible: false,
    year: 2009,
    description: (
      <>
        Dice Roll Simulator is a simple program that simulates the rolling of 2
        dice. It loops 250 times and displays the results of totals continuously
        until it has completed.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Coin Flip",
    slug: "coin-flip",
    visible: false,
    description: (
      <>
        Coin Flip is a simple program I made a long time ago that simply allows
        you to choose any Canadian coin and results in a random decision of
        landing heads or tails. I will warn you though, the result of this
        program was not very graphically pleasing.
      </>
    ),
    platforms: [Platform.WINDOWS],
  },
  {
    name: "Random Number Generator",
    slug: "random-number-generator",
    visible: false,
    description: (
      <>A classic random number generator that generates numbers from 0 to 9.</>
    ),
    platforms: [Platform.WINDOWS],
  },
];
export const PROJECT_MAP = keyBy(PROJECT_LIST, "slug");
