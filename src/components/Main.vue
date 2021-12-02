<template>
    <main>
        <section class='site-title'>
        <div class="site-background">
            <h2>随时 & 随地</h2>
            <h1>都要盛装出席</h1>
            <button class='btn1' @click="explore">探索</button>
        </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "Main",
    methods: {
        explore(){
            alert("探索")
        }
    }
}
</script>

<style scoped>
main{
    --wihte:#ffff;
    --sky:linear-gradient(120deg,#a1c4fd 0%,#c2e9fb 100%);
    background: url('../assets/bg1.jpg');
    background-size: cover; 
}
h1{
    font-size: 2.5rem;
}
h2{
    font-size: 1.3rem;
}
.btn1{
    border:none;
    border-radius: 2rem;
    padding: 1rem 3rem;
    font-size: 1rem;
    cursor: pointer;
}
.site-title{
    height: 100vh;
    display: flex;
    justify-content: center;
}
.site-background{
    padding-top: 10rem;
    text-align: center;
    color: var(--wihte);
}
.site-title h1,h2{
    margin: 3rem;
}
.site-title .btn1{
    margin: 1.8rem;
    background-image: var(--sky);
    transition: all 0.5s;
}
.site-title .btn1:hover{
    transform: scale(1.1);
    background: transparent;
    color: var(--white);
    border: 1px solid var(--wihte);
}
</style>