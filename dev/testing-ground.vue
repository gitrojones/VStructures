<template>
    <div class="testing-ground">
        <!-- Import components here to test -->
        <v-flex-container schema="customClass" padding="1em" margin="0 auto">
            <template slot="level-1">
                <h1 class="test1">Hello World</h1>
                <h1 class="test2">Foo, Bar</h1>
            </template>

            <h1 class="testing2" slot="level-2">Foo Bar</h1>
        </v-flex-container>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
* {
    box-sizing: border-box;
}

.customClass {
    background-color: darken(white, 10%);

    &__wrapper {
        display: flex;
        flex-flow: row wrap;
        background-color: darken(white, 20%);
        margin: 0.5em;
    }
    &__column {
        background-color: darken(white, 30%);
        padding: 0.25em;
        margin: 0.5em;
    }
}

.test1, .test2 {
    background-color: red;
    margin: 0;
}
.testing2 {
    background-color: blue;
    margin: 0;
}
</style>