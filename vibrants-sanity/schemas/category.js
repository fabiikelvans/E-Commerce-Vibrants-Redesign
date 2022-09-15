import { ViewGridIcon } from "@heroicons/react/outline";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: ViewGridIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
};