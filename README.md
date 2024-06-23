# Play2Earn Project Documentation

![Play2Earn](./screenshots/0.png)
The project revolves around `Play2EarnX.sol`, a Solidity-written Ethereum smart contract. It leverages the OpenZeppelin library to ensure secure and standardized development of the contract.

![Play2Earn](./screenshots/1.png)

The core of the contract is defined by four primary structures: `GameStruct`, `PlayerStruct`, `InvitationStruct`, and `ScoreStruct`, representing a game, a player, an invitation, and a score, respectively.

## Key Features

- `createGame`: Allows a user to create a new game.
- `deleteGame`: Allows the game owner to delete a game.
- `invitePlayer`: Allows a user to invite another player to a game.
- `acceptInvitation`: Allows a user to accept an invitation to a game.
- `rejectInvitation`: Allows a user to reject an invitation to a game.
- `payout`: Distributes payouts to the winners of a game.
- `saveScore`: Records a player's score in a game.


Run the contract seeding script: `yarn seed`
Spin up the Next.js development server: `yarn dev`

Now, your application should be up and running.

## 📚 Key Technologies

- 🌐 Next.js: A React framework for building server-side rendered and static websites.
- 📘 TypeScript: A statically typed superset of JavaScript.
- 📦 Hardhat: A development environment for Ethereum smart contracts.
- 🌐 EthersJs: A library for interacting with Ethereum and Ethereum-like blockchains.
- 📚 Redux-Toolkit: A library for managing application state.
- 🎨 Tailwind CSS: A utility-first CSS framework.

## Useful links

- 🏠 [Website](https://dappmentors.org/)
- ⚽ [Metamask](https://metamask.io/)
- 💡 [Hardhat](https://hardhat.org/)
- 📈 [Alchemy](https://dashboard.alchemy.com/)
- 🔥 [NextJs](https://nextjs.org/)
- 🎅 [TypeScript](https://www.typescriptlang.org/)
- 🐻 [Solidity](https://soliditylang.org/)
- 👀 [EthersJs](https://docs.ethers.io/v5/)
