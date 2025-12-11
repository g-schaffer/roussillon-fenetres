
// Mapping des dimensions vers les price IDs Stripe
// Format: "HauteurxLargeur" -> price_id
export const PRICE_MAPPING: Record<string, string> = {
  "2350x1600": "price_1SVeRvQtVyzokKYdwcMLi32q",
  "2350x1500": "price_1SVeRuQtVyzokKYdfxIuMvnR",
  "2350x1400": "price_1SVeRtQtVyzokKYdx6ahId5m",
  "2350x1300": "price_1SVeRtQtVyzokKYdRbP3zcCk",
  "2350x1200": "price_1SVeRsQtVyzokKYdbfWZ2oTZ",
  "2350x1100": "price_1SVeRsQtVyzokKYdOBuR6ePv",
  "2350x1000": "price_1SVeRrQtVyzokKYdVmKsdpw9",
  "2350x900": "price_1SVeRrQtVyzokKYdyLfVVaOd",
  "2350x800": "price_1SVeRqQtVyzokKYdXQ3QTreA",
  "2350x700": "price_1SVeRpQtVyzokKYd25blrqEZ",
  "2350x600": "price_1SVeRpQtVyzokKYdULA9zAiH",
  "2250x1600": "price_1SVeRoQtVyzokKYdtlQRFAxl",
  "2250x1500": "price_1SVeRoQtVyzokKYdyENgOB1n",
  "2250x1400": "price_1SVeRnQtVyzokKYdZmGAikUU",
  "2250x1300": "price_1SVeRmQtVyzokKYd3FPX03Eb",
  "2250x1200": "price_1SVeRmQtVyzokKYdaXd5AaqK",
  "2250x1100": "price_1SVeRlQtVyzokKYdOsE6DvFY",
  "2250x1000": "price_1SVeRlQtVyzokKYdJXHvmAFq",
  "2250x900": "price_1SVeRkQtVyzokKYdpPMdWxDI",
  "2250x800": "price_1SVeRjQtVyzokKYdUZjgdMsK",
  "2250x700": "price_1SVeRjQtVyzokKYdABV1UHXs",
  "2250x600": "price_1SVeRiQtVyzokKYdlMpbU7WT",
  "2150x1600": "price_1SVeRiQtVyzokKYddDKqPGkR",
  "2150x1500": "price_1SVeRhQtVyzokKYdYuWI8E2H",
  "2150x1400": "price_1SVeRgQtVyzokKYd5FtnDjdV",
  "2150x1300": "price_1SVeRgQtVyzokKYdgwSTqkpP",
  "2150x1200": "price_1SVeRfQtVyzokKYdvwdo7KZC",
  "2150x1100": "price_1SVeRfQtVyzokKYdOjqHuPh2",
  "2150x1000": "price_1SVeReQtVyzokKYdrSePkfmY",
  "2150x900": "price_1SVeReQtVyzokKYdtJjrdqva",
  "2150x800": "price_1SVeRdQtVyzokKYdXtaIVPRS",
  "2150x700": "price_1SVeRcQtVyzokKYd49hRZu2u",
  "2150x600": "price_1SVeRcQtVyzokKYdxnRWVosh",
  "2050x1600": "price_1SVeRbQtVyzokKYdsS0ueCTa",
  "2050x1500": "price_1SVeRbQtVyzokKYd7JWMh8F1",
  "2050x1400": "price_1SVeRaQtVyzokKYd54alpa6W",
  "2050x1300": "price_1SVeRaQtVyzokKYdRj3smOc5",
  "2050x1200": "price_1SVeRZQtVyzokKYdbaykPqPM",
  "2050x1100": "price_1SVeRYQtVyzokKYd7IcngS95",
  "2050x1000": "price_1SVeRYQtVyzokKYdzMuKOV2a",
  "2050x900": "price_1SVeRXQtVyzokKYdYvatzqoA",
  "2050x800": "price_1SVeRXQtVyzokKYdLDqyySn6",
  "2050x700": "price_1SVeRWQtVyzokKYdJJLMENY5",
  "2050x600": "price_1SVeRVQtVyzokKYdFkJJcHQj",
  "1950x1600": "price_1SVeRVQtVyzokKYd0PDxw9cp",
  "1950x1500": "price_1SVeRUQtVyzokKYdqgrAFlV1",
  "1950x1400": "price_1SVeRUQtVyzokKYdUywnK37w",
  "1950x1300": "price_1SVeRTQtVyzokKYdapwr7xOD",
  "1950x1200": "price_1SVeRSQtVyzokKYdLyXEqbwj",
  "1950x1100": "price_1SVeRSQtVyzokKYdiHMWpFNl",
  "1950x1000": "price_1SVeRRQtVyzokKYdop1Dob2P",
  "1950x900": "price_1SVeRRQtVyzokKYdc9SeKYtK",
  "1950x800": "price_1SVeRQQtVyzokKYd5qRDmdHn",
  "1950x700": "price_1SVeRPQtVyzokKYdtw6GyxBn",
  "1950x600": "price_1SVeRPQtVyzokKYdIuKdtpJb",
  "1850x1600": "price_1SVeROQtVyzokKYdEj4sxgAg",
  "1850x1500": "price_1SVeROQtVyzokKYdoCjE94jL",
  "1850x1400": "price_1SVeRNQtVyzokKYdqKaeOxKA",
  "1850x1300": "price_1SVeRMQtVyzokKYddNoWFefu",
  "1850x1200": "price_1SVeRMQtVyzokKYdh8h8DRQ3",
  "1850x1100": "price_1SVeRLQtVyzokKYdBvai2Lfc",
  "1850x1000": "price_1SVeRLQtVyzokKYdpsAVqpDk",
  "1850x900": "price_1SVeRKQtVyzokKYdtn5Rb8xe",
  "1850x800": "price_1SVeRJQtVyzokKYddkwk1M7j",
  "1850x700": "price_1SVeRJQtVyzokKYd8IRoZEi2",
  "1850x600": "price_1SVeRIQtVyzokKYdGOrNDFp0",
  "1750x1600": "price_1SVeRIQtVyzokKYdHYafB3qM",
  "1750x1500": "price_1SVeRHQtVyzokKYdZtIWy1hc",
  "1750x1400": "price_1SVeRHQtVyzokKYdje6AMjy4",
  "1750x1300": "price_1SVeRGQtVyzokKYddCNPqN1l",
  "1750x1200": "price_1SVeRFQtVyzokKYdiiXiW2HS",
  "1750x1100": "price_1SVeRFQtVyzokKYdNr78PVfR",
  "1750x1000": "price_1SVeREQtVyzokKYddkVEDWyg",
  "1750x900": "price_1SVeREQtVyzokKYdsA4DlrsP",
  "1750x800": "price_1SVeRDQtVyzokKYdpXWWCI5f",
  "1750x700": "price_1SVeRCQtVyzokKYdtA53fzPe",
  "1750x600": "price_1SVeRCQtVyzokKYdN1kfBVee",
  "1650x1600": "price_1SVeRBQtVyzokKYdib6Vcz3S",
  "1650x1500": "price_1SVeRBQtVyzokKYdPHnVf5NL",
  "1650x1400": "price_1SVeRAQtVyzokKYdYSvIPaVz",
  "1650x1300": "price_1SVeRAQtVyzokKYdQb4L8ojE",
  "1650x1200": "price_1SVeR9QtVyzokKYdIBZTNWDA",
  "1650x1100": "price_1SVeR8QtVyzokKYdAYsegeAy",
  "1650x1000": "price_1SVeR8QtVyzokKYdNFtu6ibu",
  "1650x900": "price_1SVeR7QtVyzokKYdgS0kAqaq",
  "1650x800": "price_1SVeR7QtVyzokKYd7eA5GMEG",
  "1650x700": "price_1SVeR6QtVyzokKYd1H0iQdfx",
  "1650x600": "price_1SVeR5QtVyzokKYdg16lgwUm",
  "1550x600": "price_1SVeRyQtVyzokKYdDL1T8gaK",
  "1550x700": "price_1SVeRxQtVyzokKYdNWEN27mf",
  "1550x800": "price_1SVeRxQtVyzokKYdAdaNb0Ha",
  "1550x900": "price_1SVeRwQtVyzokKYdN3inKkNL",
  "1550x1000": "price_1SVeRwQtVyzokKYdvulVcUoF",
  "1550x1100": "price_1SVeRvQtVyzokKYdRjXHq7jH",
  "1550x1600": "price_1SVeR5QtVyzokKYdRYOU3QAs",
  "1550x1500": "price_1SVeR4QtVyzokKYd7wFeFzTS",
  "1550x1400": "price_1SVeR4QtVyzokKYd97V1HEkq",
  "1550x1300": "price_1SVeR3QtVyzokKYd2JXT5dvp",
  "1550x1200": "price_1SVeR2QtVyzokKYdYrY0kUa3",
  "1450x500": "price_1SVeS5QtVyzokKYdwJOLtQYV",
  "1450x600": "price_1SVeS5QtVyzokKYdbLmYvyE3",
  "1450x700": "price_1SVeS4QtVyzokKYdJwDoOxQs",
  "1450x800": "price_1SVeS3QtVyzokKYd249SHvI7",
  "1450x900": "price_1SVeS3QtVyzokKYdykASG3Cg",
  "1450x1000": "price_1SVeS2QtVyzokKYdNebD41ay",
  "1450x1100": "price_1SVeS2QtVyzokKYdzaY83u3o",
  "1450x1200": "price_1SVeS1QtVyzokKYdi6Q3TY30",
  "1450x1300": "price_1SVeS0QtVyzokKYdTpYBOPbs",
  "1450x1400": "price_1SVeS0QtVyzokKYdyjKwRUXN",
  "1450x1500": "price_1SVeRzQtVyzokKYdtViUB0N1",
  "1450x1600": "price_1SVeRzQtVyzokKYdWgLrjhJs",
  "1350x500": "price_1SVeSCQtVyzokKYdEyjD3iNF",
  "1350x600": "price_1SVeSCQtVyzokKYdhcyirLPF",
  "1350x700": "price_1SVeSBQtVyzokKYdRkG9edNb",
  "1350x800": "price_1SVeSAQtVyzokKYdHu0fSQ7s",
  "1350x900": "price_1SVeSAQtVyzokKYd0MaHUmw6",
  "1350x1000": "price_1SVeS9QtVyzokKYde4WmD3y2",
  "1350x1100": "price_1SVeS9QtVyzokKYd5duWNyzu",
  "1350x1200": "price_1SVeS8QtVyzokKYdwFERk40Z",
  "1350x1300": "price_1SVeS7QtVyzokKYdoi9sNCId",
  "1350x1400": "price_1SVeS7QtVyzokKYdbe9a15x0",
  "1350x1500": "price_1SVeS6QtVyzokKYdGJLFDeeQ",
  "1350x1600": "price_1SVeS6QtVyzokKYdrchmM09q",
  "1250x500": "price_1SVeSJQtVyzokKYdf1t9e58P",
  "1250x600": "price_1SVeSJQtVyzokKYdhQ0ixwLE",
  "1250x700": "price_1SVeSIQtVyzokKYdSiB7ZA99",
  "1250x800": "price_1SVeSIQtVyzokKYdWRoKlIAI",
  "1250x900": "price_1SVeSHQtVyzokKYduB60mAZJ",
  "1250x1000": "price_1SVeSGQtVyzokKYdI6f3U80j",
  "1250x1100": "price_1SVeSGQtVyzokKYdsGBXK3aZ",
  "1250x1200": "price_1SVeSFQtVyzokKYdcM1Jghaa",
  "1250x1300": "price_1SVeSFQtVyzokKYdv9A2cQZn",
  "1250x1400": "price_1SVeSEQtVyzokKYdetUnXJ5m",
  "1250x1500": "price_1SVeSDQtVyzokKYdyqodPlTd",
  "1250x1600": "price_1SVeSDQtVyzokKYdE9zVHXey",
  "1150x500": "price_1SVeSRQtVyzokKYdpmDmTzGq",
  "1150x600": "price_1SVeSQQtVyzokKYdVYKnJGJO",
  "1150x700": "price_1SVeSPQtVyzokKYdr8E6okOL",
  "1150x800": "price_1SVeSPQtVyzokKYdcctsvyrV",
  "1150x900": "price_1SVeSOQtVyzokKYdQaB6hOOA",
  "1150x1000": "price_1SVeSOQtVyzokKYdz3Wv3OQE",
  "1150x1100": "price_1SVeSNQtVyzokKYdan9tflUC",
  "1150x1200": "price_1SVeSMQtVyzokKYdfzGrSiY3",
  "1150x1300": "price_1SVeSMQtVyzokKYdWBoNTIgG",
  "1150x1400": "price_1SVeSLQtVyzokKYdpMEOo1G2",
  "1150x1500": "price_1SVeSLQtVyzokKYd4uGJyD1m",
  "1150x1600": "price_1SVeSKQtVyzokKYdy3SVJM20",
  "1050x500": "price_1SVeSYQtVyzokKYdSi1sqw8V",
  "1050x600": "price_1SVeSXQtVyzokKYdXsBRfOYB",
  "1050x700": "price_1SVeSWQtVyzokKYdzletISG4",
  "1050x800": "price_1SVeSWQtVyzokKYdG9DxDkq4",
  "1050x900": "price_1SVeSVQtVyzokKYdKyMbrV6q",
  "1050x1000": "price_1SVeSVQtVyzokKYdSWTIqJnP",
  "1050x1100": "price_1SVeSUQtVyzokKYdfpB1H8xF",
  "1050x1200": "price_1SVeSTQtVyzokKYdgeqA6Id6",
  "1050x1300": "price_1SVeSTQtVyzokKYdStx1GHH5",
  "1050x1400": "price_1SVeSSQtVyzokKYd93bLNfQx",
  "1050x1500": "price_1SVeSSQtVyzokKYdPznbYteK",
  "1050x1600": "price_1SVeSRQtVyzokKYd8UQBKvfp",
  "950x500": "price_1SVeSfQtVyzokKYdxJmzywuB",
  "950x600": "price_1SVeSfQtVyzokKYdHz8or9Ab",
  "950x700": "price_1SVeSeQtVyzokKYdTbiRDhZC",
  "950x800": "price_1SVeSdQtVyzokKYdkRbHnAzo",
  "950x900": "price_1SVeSdQtVyzokKYd15CqlUqw",
  "950x1000": "price_1SVeScQtVyzokKYdcAkgHDGC",
  "950x1100": "price_1SVeScQtVyzokKYd5dpG7TY9",
  "950x1200": "price_1SVeSbQtVyzokKYdNNfimLr3",
  "950x1300": "price_1SVeSaQtVyzokKYdcjED5m12",
  "950x1400": "price_1SVeSZQtVyzokKYdodtC8sqR",
  "950x1500": "price_1SVeSZQtVyzokKYdCDfBxvuq",
  "950x1600": "price_1SVeSYQtVyzokKYdxM1z887d",
  "850x500": "price_1SVeSmQtVyzokKYdkNovQn4f",
  "850x600": "price_1SVeSmQtVyzokKYdW75gAcoM",
  "850x700": "price_1SVeSlQtVyzokKYdPEkQOgr6",
  "850x800": "price_1SVeSkQtVyzokKYdM1OFoSPn",
  "850x900": "price_1SVeSkQtVyzokKYd9K0ar866",
  "850x1000": "price_1SVeSjQtVyzokKYdAAtYEhu0",
  "850x1100": "price_1SVeSjQtVyzokKYdFQWQnnNv",
  "850x1200": "price_1SVeSiQtVyzokKYdCDZZPtHr",
  "850x1300": "price_1SVeShQtVyzokKYdnYDBEXZN",
  "850x1400": "price_1SVeShQtVyzokKYdDTz18jR3",
  "850x1500": "price_1SVeSgQtVyzokKYdbzLvgdnR",
  "850x1600": "price_1SVeSgQtVyzokKYdyzFZahif",
  "750x500": "price_1SVeStQtVyzokKYdtTbDKewf",
  "750x600": "price_1SVeSsQtVyzokKYdmIZS3Ldx",
  "750x700": "price_1SVeSsQtVyzokKYdwFB1BUZK",
  "750x800": "price_1SVeSrQtVyzokKYdudlZHD22",
  "750x900": "price_1SVeSrQtVyzokKYdnT8LdLjW",
  "750x1000": "price_1SVeSqQtVyzokKYd9kutbT1P",
  "750x1100": "price_1SVeSqQtVyzokKYdcisAEmsT",
  "750x1200": "price_1SVeSpQtVyzokKYd0sDrfgqE",
  "750x1300": "price_1SVeSoQtVyzokKYdcMifZKod",
  "750x1400": "price_1SVeSoQtVyzokKYdNcTEfna6",
  "750x1500": "price_1SVeSnQtVyzokKYdm3PrZS7L",
  "750x1600": "price_1SVeSnQtVyzokKYdGZyTGZmR",
  "650x500": "price_1SVeT0QtVyzokKYd1zoQAhSn",
  "650x600": "price_1SVeT0QtVyzokKYdfmUGv2Y3",
  "650x700": "price_1SVeSzQtVyzokKYdyTsEZlap",
  "650x800": "price_1SVeSyQtVyzokKYdDz18ugxM",
  "650x900": "price_1SVeSyQtVyzokKYdBhork8Fa",
  "650x1000": "price_1SVeSxQtVyzokKYdqnb2HQWq",
  "650x1100": "price_1SVeSxQtVyzokKYdOGwc5dLS",
  "650x1200": "price_1SVeSwQtVyzokKYdUvbPMnV4",
  "650x1300": "price_1SVeSvQtVyzokKYdP7PINhDg",
  "650x1400": "price_1SVeSvQtVyzokKYdQpMRhxWE",
  "650x1500": "price_1SVeSuQtVyzokKYdC7j040gc",
  "650x1600": "price_1SVeSuQtVyzokKYdcNiuihLQ",
  "550x500": "price_1SVeT7QtVyzokKYdMehMMkCB",
  "550x600": "price_1SVeT7QtVyzokKYd6OAMqpuj",
  "550x700": "price_1SVeT6QtVyzokKYdc8aankbR",
  "550x800": "price_1SVeT5QtVyzokKYdfeP2Tkny",
  "550x900": "price_1SVeT5QtVyzokKYdVxfOTHmJ",
  "550x1000": "price_1SVeT4QtVyzokKYdN9MnTJp4",
  "550x1100": "price_1SVeT4QtVyzokKYdC0k9Wut0",
  "550x1200": "price_1SVeT3QtVyzokKYdgpUNxWOt",
  "550x1300": "price_1SVeT2QtVyzokKYdxwv5RRmZ",
  "550x1400": "price_1SVeT2QtVyzokKYdTX19uRr8",
  "550x1500": "price_1SVeT1QtVyzokKYdtN3Yg9pI",
  "550x1600": "price_1SVeT1QtVyzokKYdZIibjQ97",
};

// Mapping des prix en euros (pour affichage sur la page produit)
export const PRICE_AMOUNTS: Record<string, number> = {
  "2350x1600": 298,
  "2350x1500": 289,
  "2350x1400": 282,
  "2350x1300": 274,
  "2350x1200": 265,
  "2350x1100": 257,
  "2350x1000": 247,
  "2350x900": 240,
  "2350x800": 232,
  "2350x700": 223,
  "2350x600": 215,
  "2250x1600": 294,
  "2250x1500": 287,
  "2250x1400": 278,
  "2250x1300": 269,
  "2250x1200": 260,
  "2250x1100": 252,
  "2250x1000": 244,
  "2250x900": 236,
  "2250x800": 228,
  "2250x700": 218,
  "2250x600": 210,
  "2150x1600": 290,
  "2150x1500": 282,
  "2150x1400": 274,
  "2150x1300": 265,
  "2150x1200": 257,
  "2150x1100": 247,
  "2150x1000": 240,
  "2150x900": 232,
  "2150x800": 223,
  "2150x700": 215,
  "2150x600": 206,
  "2050x1600": 287,
  "2050x1500": 278,
  "2050x1400": 269,
  "2050x1300": 260,
  "2050x1200": 252,
  "2050x1100": 245,
  "2050x1000": 236,
  "2050x900": 228,
  "2050x800": 218,
  "2050x700": 210,
  "2050x600": 202,
  "1950x1600": 282,
  "1950x1500": 274,
  "1950x1400": 265,
  "1950x1300": 257,
  "1950x1200": 250,
  "1950x1100": 240,
  "1950x1000": 232,
  "1950x900": 223,
  "1950x800": 215,
  "1950x700": 206,
  "1950x600": 199,
  "1850x1600": 278,
  "1850x1500": 269,
  "1850x1400": 260,
  "1850x1300": 253,
  "1850x1200": 245,
  "1850x1100": 236,
  "1850x1000": 228,
  "1850x900": 218,
  "1850x800": 210,
  "1850x700": 203,
  "1850x600": 194,
  "1750x1600": 274,
  "1750x1500": 265,
  "1750x1400": 258,
  "1750x1300": 250,
  "1750x1200": 240,
  "1750x1100": 232,
  "1750x1000": 223,
  "1750x900": 215,
  "1750x800": 208,
  "1750x700": 199,
  "1750x600": 190,
  "1650x1600": 252,
  "1650x1500": 245,
  "1650x1400": 238,
  "1650x1300": 230,
  "1650x1200": 223,
  "1650x1100": 216,
  "1650x1000": 209,
  "1650x900": 202,
  "1650x800": 194,
  "1650x700": 187,
  "1650x600": 180,
  "1550x600": 146,
  "1550x700": 152,
  "1550x800": 158,
  "1550x900": 164,
  "1550x1000": 170,
  "1550x1100": 176,
  "1550x1600": 250,
  "1550x1500": 242,
  "1550x1400": 233,
  "1550x1300": 226,
  "1550x1200": 218,
  "1450x500": 137,
  "1450x600": 143,
  "1450x700": 149,
  "1450x800": 155,
  "1450x900": 161,
  "1450x1000": 167,
  "1450x1100": 173,
  "1450x1200": 179,
  "1450x1300": 185,
  "1450x1400": 192,
  "1450x1500": 198,
  "1450x1600": 204,
  "1350x500": 133,
  "1350x600": 139,
  "1350x700": 145,
  "1350x800": 151,
  "1350x900": 157,
  "1350x1000": 163,
  "1350x1100": 169,
  "1350x1200": 176,
  "1350x1300": 182,
  "1350x1400": 188,
  "1350x1500": 194,
  "1350x1600": 200,
  "1250x500": 130,
  "1250x600": 136,
  "1250x700": 142,
  "1250x800": 148,
  "1250x900": 154,
  "1250x1000": 161,
  "1250x1100": 167,
  "1250x1200": 173,
  "1250x1300": 179,
  "1250x1400": 185,
  "1250x1500": 191,
  "1250x1600": 197,
  "1150x500": 126,
  "1150x600": 132,
  "1150x700": 138,
  "1150x800": 145,
  "1150x900": 151,
  "1150x1000": 157,
  "1150x1100": 163,
  "1150x1200": 169,
  "1150x1300": 175,
  "1150x1400": 181,
  "1150x1500": 187,
  "1150x1600": 193,
  "1050x500": 122,
  "1050x600": 130,
  "1050x700": 136,
  "1050x800": 142,
  "1050x900": 148,
  "1050x1000": 154,
  "1050x1100": 160,
  "1050x1200": 166,
  "1050x1300": 172,
  "1050x1400": 178,
  "1050x1500": 184,
  "1050x1600": 190,
  "950x500": 120,
  "950x600": 126,
  "950x700": 132,
  "950x800": 138,
  "950x900": 144,
  "950x1000": 150,
  "950x1100": 156,
  "950x1200": 162,
  "950x1300": 168,
  "950x1400": 174,
  "950x1500": 180,
  "950x1600": 187,
  "850x500": 116,
  "850x600": 122,
  "850x700": 128,
  "850x800": 134,
  "850x900": 140,
  "850x1000": 146,
  "850x1100": 152,
  "850x1200": 158,
  "850x1300": 164,
  "850x1400": 170,
  "850x1500": 178,
  "850x1600": 184,
  "750x500": 113,
  "750x600": 119,
  "750x700": 125,
  "750x800": 131,
  "750x900": 137,
  "750x1000": 143,
  "750x1100": 149,
  "750x1200": 155,
  "750x1300": 162,
  "750x1400": 168,
  "750x1500": 174,
  "750x1600": 180,
  "650x500": 109,
  "650x600": 115,
  "650x700": 121,
  "650x800": 127,
  "650x900": 133,
  "650x1000": 139,
  "650x1100": 146,
  "650x1200": 152,
  "650x1300": 158,
  "650x1400": 164,
  "650x1500": 170,
  "650x1600": 176,
  "550x500": 106,
  "550x600": 112,
  "550x700": 118,
  "550x800": 124,
  "550x900": 131,
  "550x1000": 137,
  "550x1100": 143,
  "550x1200": 149,
  "550x1300": 155,
  "550x1400": 161,
  "550x1500": 167,
  "550x1600": 173,
};

// Taux de TVA français (utilisé uniquement pour l'affichage du détail)
const TVA_RATE = 0.20; // 20%

/**
 * Arrondit les dimensions vers le haut aux dimensions disponibles les plus proches
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Les dimensions arrondies ou null si hors limites
 */
function roundUpDimensions(hauteur: number, largeur: number): { hauteur: number, largeur: number } | null {
  const ranges = getDimensionRanges();

  // Vérifier que les dimensions sont dans les limites
  if (hauteur < ranges.hauteur.min || hauteur > ranges.hauteur.max ||
      largeur < ranges.largeur.min || largeur > ranges.largeur.max) {
    return null;
  }

  // Trouver la hauteur disponible immédiatement supérieure ou égale
  const roundedHauteur = ranges.hauteur.values.find(h => h >= hauteur) || ranges.hauteur.max;

  // Trouver la largeur disponible immédiatement supérieure ou égale
  const roundedLargeur = ranges.largeur.values.find(l => l >= largeur) || ranges.largeur.max;

  return { hauteur: roundedHauteur, largeur: roundedLargeur };
}

/**
 * Trouve le price ID Stripe correspondant aux dimensions données
 * Si les dimensions exactes n'existent pas, arrondit vers le haut
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Le price ID Stripe ou null si hors limites
 */
export function findPriceId(hauteur: string | number, largeur: string | number): string | null {
  const h = Number(hauteur);
  const l = Number(largeur);

  // Essayer d'abord avec les dimensions exactes
  const exactKey = `${h}x${l}`;
  if (PRICE_MAPPING[exactKey]) {
    return PRICE_MAPPING[exactKey];
  }

  // Sinon, arrondir vers le haut
  const rounded = roundUpDimensions(h, l);
  if (!rounded) return null;

  const roundedKey = `${rounded.hauteur}x${rounded.largeur}`;
  return PRICE_MAPPING[roundedKey] || null;
}

/**
 * Trouve le prix TTC en euros correspondant aux dimensions données
 * Si les dimensions exactes n'existent pas, arrondit vers le haut
 * Les prix dans Stripe sont déjà en TTC
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Le prix TTC en euros ou null si hors limites
 */
export function findPrice(hauteur: string | number, largeur: string | number): number | null {
  const h = Number(hauteur);
  const l = Number(largeur);

  // Essayer d'abord avec les dimensions exactes
  const exactKey = `${h}x${l}`;
  if (PRICE_AMOUNTS[exactKey]) {
    return PRICE_AMOUNTS[exactKey];
  }

  // Sinon, arrondir vers le haut
  const rounded = roundUpDimensions(h, l);
  if (!rounded) return null;

  const roundedKey = `${rounded.hauteur}x${rounded.largeur}`;
  return PRICE_AMOUNTS[roundedKey] || null;
}

/**
 * Calcule le prix HT à partir du prix TTC (pour affichage)
 * Si les dimensions exactes n'existent pas, arrondit vers le haut
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Le prix HT en euros ou null si hors limites
 */
export function findPriceHT(hauteur: string | number, largeur: string | number): number | null {
  const priceTTC = findPrice(hauteur, largeur);
  if (!priceTTC) return null;
  return Math.round(priceTTC / (1 + TVA_RATE));
}

/**
 * Obtient les dimensions arrondies utilisées pour le calcul du prix
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Les dimensions arrondies ou null si hors limites
 */
export function getRoundedDimensions(hauteur: number, largeur: number): { hauteur: number, largeur: number } | null {
  return roundUpDimensions(hauteur, largeur);
}

/**
 * Obtient les dimensions disponibles
 * @returns Liste des dimensions disponibles au format "HxL"
 */
export function getAvailableDimensions(): string[] {
  return Object.keys(PRICE_MAPPING);
}

/**
 * Obtient les plages de dimensions disponibles
 * @returns Object avec min/max pour hauteur et largeur
 */
export function getDimensionRanges() {
  const dimensions = Object.keys(PRICE_MAPPING).map(key => {
    const [h, l] = key.split('x').map(Number);
    return { hauteur: h, largeur: l };
  });

  const hauteurs = [...new Set(dimensions.map(d => d.hauteur))].sort((a, b) => a - b);
  const largeurs = [...new Set(dimensions.map(d => d.largeur))].sort((a, b) => a - b);

  return {
    hauteur: { min: hauteurs[0], max: hauteurs[hauteurs.length - 1], values: hauteurs },
    largeur: { min: largeurs[0], max: largeurs[largeurs.length - 1], values: largeurs },
  };
}

