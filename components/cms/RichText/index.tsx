import { MediaBlock } from "@/blocks/MediaBlock/Component";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from "@payloadcms/richtext-lexical";
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from "@payloadcms/richtext-lexical/react";

import { CodeBlock, CodeBlockProps } from "@/blocks/Code/Component";

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from "@/payload-types";
import { BannerBlock } from "@/blocks/Banner/Component";
import { CallToActionBlock } from "@/blocks/CallToAction/Component";
import { cn } from "@/utils/ui";

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps
    >;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!;
  if (typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }
  const slug = value.slug;
  return relationTo === "posts" ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => (
      <BannerBlock className="col-start-2 mb-4" {...node.fields} />
    ),
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-[48rem]"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
});

type Props = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props;
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        "payload-richtext",
        {
          container: enableGutter,
          "max-w-none": !enableGutter,
          "mx-auto prose prose-lg md:prose-xl lg:prose-2xl dark:prose-invert prose-primaryBlue": enableProse,
        },
        // Enhanced prose styling for blog content
        enableProse && [
          "prose-headings:text-neutralDarker prose-headings:font-bold",
          "prose-h1:text-3xl md:prose-h1:text-4xl lg:prose-h1:text-5xl prose-h1:leading-tight",
          "prose-h2:text-2xl md:prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:leading-tight prose-h2:mt-12 prose-h2:mb-6",
          "prose-h3:text-xl md:prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:leading-tight prose-h3:mt-10 prose-h3:mb-4",
          "prose-p:text-neutralDarker/90 prose-p:leading-relaxed prose-p:mb-6",
          "prose-a:text-primaryBlue prose-a:font-semibold prose-a:no-underline hover:prose-a:text-primaryBrightAqua hover:prose-a:underline",
          "prose-strong:text-neutralDarker prose-strong:font-bold",
          "prose-em:text-neutralDarker/80",
          "prose-blockquote:border-l-primaryBrightAqua prose-blockquote:bg-robinsEggBlueLighter prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",
          "prose-blockquote:text-neutralDarker prose-blockquote:font-medium",
          "prose-ul:my-6 prose-ol:my-6",
          "prose-li:text-neutralDarker/90 prose-li:leading-relaxed prose-li:mb-2",
          "prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-primaryBlue prose-code:font-medium",
          "prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:p-6",
          "prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8",
          "prose-hr:border-gray-200 prose-hr:my-12",
        ],
        className
      )}
      {...rest}
    />
  );
}
