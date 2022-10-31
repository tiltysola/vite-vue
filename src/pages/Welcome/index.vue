<template>
  <div className="welcome">
    <h1 className="title">Vite Vue</h1>
    <span>This is a template for vue + typescript.</span>
    <div className="links">
      <p>
        <a href="https://cn.vuejs.org/">Vue</a> |
        <a href="https://router.vuejs.org/">Vue-Router</a>
      </p>
      <p>
        <a href="https://www.typescriptlang.org/">Typescript</a> |
        <a href="http://lesscss.org/">Less</a>
      </p>
      <p>
        <a href="https://eslint.org/">Eslint</a> |
        <a href="https://www.npmjs.com/package/eslint-config-ali">Eslint-Config-Ali</a>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.welcome {
  text-align: center;
  color: rgb(72, 72, 72);
  .title {
    margin: 64px 0 24px 0;
    font-size: 22px;
  }
  .links {
    display: table;
    margin: 20px 10%;
    width: 80%;
    p {
      display: table-row;
      width: 100%;
      a {
        display: table-cell;
        width: 50%;
        padding: 4px 12px;
        color: rgba(72, 72, 196);
        text-decoration: none;
        &:first-child {
          text-align: right;
        }
        &:last-child {
          text-align: left;
        }
        &:hover {
          color: rgba(92, 92, 216);
        }
      }
    }
  }
}
</style>
