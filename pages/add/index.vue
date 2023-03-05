<template>
    <AdminPostForm/>
</template>

<script>
export default {
    middleware: ["check-auth", "auth"],
}
</script>