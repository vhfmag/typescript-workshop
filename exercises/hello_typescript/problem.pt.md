# Olá, Typescript

Typescript é uma extensão tipada do Javascript, que aumenta a segurança do código e proporciona ferramentas avançadas para desenvolvedores, como sugestões em códigos em editores de texto. Com extensão, se quer dizer que todo arquivo Javascript válido já é um arquivo Typescript válido.

Para esse exercísio, inicie um pacote node (`npm init` ou `yarn init`), instale o typescript (`npm i -d typescript` ou `yarn add -D typescript`) e crie um arquiv `index.ts` com o seguinte conteúdo:

```typescript
Math.sqrt(4);
Math.sqrt("16");
Math.sqrt("Typescript");
Math.sqrt({});
Math.sqrt(new Date());
```

Depois disso, execute `npx tsc index.ts`. `npx` executa um pacote instalado localmente. Nesse caso, o binário `tsc` (TypeScript Compiler) que vem com o pacote `typescript` anteriormente instalado, e que compila arquivos Typescript para Javascript. Finalmente, `index.ts` é o arquivo a compilar. Como resultado, um novo arquivo deve ser criado após a execução: `index.js`.

Leia os erros que vocẽ vai obter e leia o arquivo resultado `index.js` (sim, o arquivo é gerado mesmo com os erros de compilação).

Preferencialmente, também abra seu arquivo no seu editor de texto preferido (VSCode, Atom, Brackets, Sublime Text, codesandbox.io ou o que você preferir) depois de tê-lo configurado para dar suporte a Typescript. Você deveria ver erros em todas as linhas exceto a primeira, já que a função Math.sqrt não aceita os *tipos* dos argumentos dados nas demais linhas. No próximo exercício, você vai descobrir mais sobre *tipos*.
