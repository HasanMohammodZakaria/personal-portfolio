import { cn } from "@/lib/utils";


interface SectionHeadingProps {

  badge?: string;

  title: string;

  highlight?: string;

  description?: string;

  className?: string;

}


export default function SectionHeading({

  badge,

  title,

  highlight,

  description,

  className,

}: SectionHeadingProps) {


  return (

    <div
      className={cn(
        `
        mx-auto
        max-w-3xl
        text-center
        `,
        className
      )}
    >


      {
        badge && (

          <span
            className="
              inline-flex
              rounded-full
              border
              border-default
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-primary
            "
          >

            {badge}

          </span>

        )
      }



      <h2
        className="
          mt-5
          text-3xl
          font-bold
          leading-tight
          md:text-5xl
        "
      >

        {title}


        {
          highlight && (

            <span
              className="
                text-gradient
              "
            >

              {" "}
              {highlight}

            </span>

          )
        }


      </h2>



      {
        description && (

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-muted
              leading-7
            "
          >

            {description}

          </p>

        )
      }


    </div>

  );
}