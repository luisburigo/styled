# Cascade Sheet Script (CSS in JS)
 
 ---

### Intro
Lib. desenvolvida para criar estilizações de elementos no JS.

---

### Examples

**1** - Criando um elemento estilizado com tag function: 

```javascript
   const divRed = styled.div`
        background-color: red;
        width: 200px;
        height: 200px;
   `
```


**2** - Incrementandos estilos adicionais no elemento criado:

```javascript
  const divRed = styled.div`
        ... style here
  `

  divRed.appendStyle`
        font-size: 50px;
   `
```
