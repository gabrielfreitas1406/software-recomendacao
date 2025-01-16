export interface NavLinkProps {
  text: string;
}

export interface HeaderButtonProps {
  label: string;
  variant: "primary" | "secondary";
}

export interface ListRecursosProps {
  text: string;
}

export interface FavoriteButtonProps {
  onClick: () => void;
}

interface ImagensFerramena {
  logo: string;
  print: string;
}
interface Dictionary<T> {
  [key: string]: T;
}

export const imagensFerramentasDicionario: Dictionary<ImagensFerramena> = {
  Mentimeter: {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7c4e1dc898db29dfb93c8dc5915d6526042edabb38640721212fea40c5a37e7?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    print:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/66167623f34268cd2b273bc550f76af29533f069fa23c2c62bfd32b12d37feec?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
  },
  "Google Meet": {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/686d829b5a4a8fdf46f3d53ad0420ac3ea335d5c733211868a40cb3e446287ae?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    print:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/abd9bf8174b4052f7d6008946f25787194009de90b6413651e7eb13134b91d0e?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
  },
  Jamboard: {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f9ad52bc608ef992b835d0387d232f5c6cbded982e465d3a244ce2459c50e25?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    print:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8f9ad52bc608ef992b835d0387d232f5c6cbded982e465d3a244ce2459c50e25?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
  },
  "Google Slides": {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a27d2884ea9cbd20edc124668d1407d2bc0d44c4c58c2388841be919d17f66f?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    print:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78c0d089915a2cf4d04b844963cfa9c8e66a22782b3febb4f834288a5853506c?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
  },
};
