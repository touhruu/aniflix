<template>
<div class="card">
    <div class="picture-wrapper">
        <img class="card__picture" />
    </div>
    <h1 class="card__title"></h1>
    <p class="card__subscription"></p>
    <div class="sale">
        <button class="sale__reduce">-</button>
        <button class="sale__increase">+</button>
        <p class="sale__count">1</p>
    </div>
</div>
</template>

<style lang="scss">
.card {
    display: flex;
    justify-content: center;

    &__picture {
        width: 100px;
    }

    &__title {
        font-size: 18px;
    }

    &__subscription {
        font-size: 14px;
    }
}

.sale {
    &__reduce {

    }

    &__increase {
        
    }
}

.picture-wrapper {

}
</style>