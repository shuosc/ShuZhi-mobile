<template>
    <q-toolbar color="primary">
        <!--
                For Toolbar title, we use
                QToolbarTitle component
              -->
        <q-toolbar-title>
            Title
        </q-toolbar-title>
        <!--
                In a Toolbar, buttons are best
                configured as "flat" and with an icon,
                but any button will do
              -->
        <q-btn flat>
            <q-icon name="mail" />
        </q-btn>
        <!--
                ...and also small flat round buttons
              -->
        <q-btn flat round small>
            <q-icon name="mail" />
        </q-btn>
    </q-toolbar>
</template>

<script>
export default {}
</script>

<style>

</style>
