import { column, defineDb, defineTable } from 'astro:db';

const Post = defineTable({
  columns: {
    endpoint: column.text(),
    content: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Post }
});
