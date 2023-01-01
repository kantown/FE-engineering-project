import { SVGProps } from "react";

export const PlusIcon = ({ ...restProps }: SVGProps<SVGSVGElement>) => (
  <svg
    width={71}
    height={73}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...restProps}
  >
    <path fill="url(#a)" d="M0 0h71v73H0z" />
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#b" transform="matrix(.002 0 0 .00195 -.014 0)" />
      </pattern>
      <image
        id="b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAL2klEQVR4nO3dy69ddRnG8ecUAhQK1oFAUCE6kMTgBUoQaABLYhwooqggwRCj0cREJ/4NOjVGY2ICItGR98vEoFCKKGAEEi0MgKBpBbEMDJfSgpXWwTpHauVcNp69373O+/kka9TJs5K2v+9eZ++zEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA+bJQPQCYus1JLk2yI8l5Sc5NckaSLYt/vj/JviSPJNmdZFeSe5IcnPlSAOD/tj3JrUmeS3Jkwuu5JN/JEA4AwAhcluSuTH7oL3ftyhATAMAcen2GV/yHs36H/9J1OMktSbbO7G4AgFVdlOQvWf+D/9jrz0kunNE9AQAruCrJgUz/8F+6XkxyzUzuDAB4VR9LciizO/yXrkMRAQBQYkeGV+OzPvyXroNJrpj6XQIA/3FmkqdSd/gvXfuSnDXlewUAMvwCr52pP/yXrl9P93YBgCS5MfWH/rHX9VO9YwBo7qQkT6b+wD/2+muSE6d43wDQ2udTf9gvd31uivcNAK3tTv1Bv9z10BTvGwDaujD1h/xq17undvfAutpUPQBYs6urB6zBh6sHAGsjAGA8dlQPWIMxbAQyfJ4YmH+bkuxPsrl6yCoOJDk1w7cHAnPMEwAYh3My/4d/kpyc5E3VI4DVCQAYhzdXD5jA2dUDgNUJABiHU6sHTGBMW6EtAQDjMIbH/0tOqR4ArE4AwDiM6Q27Y9oKbQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGjq+egAbwqYk5yQ5O8kpixfr6+LqARMY09YxeWHx2pNkb5LDtXMYu4XqAYzWhUk+lOTKJNuSnFQ7B1p5Mcn9SXYm+XmSB2vnMEYCgEmcmOTTSb6Q5O3FW4BXPJzkG0luTfJS8RZgA1lIcmOSJ5Mccblcc3s9keSGeHHHGvhLwmremOR7SXZUDwHW7I4M0f636iHMLwHASnYk+X6SN1QPASb2dJJrk9xVPYT55GOALOejSX4Zhz+M1elJbktyTfUQ5pMnALyaq5L8JD4mChvBy0k+nuSn1UOYLwKAY12UZFeSzdVDgHVzIMnlSR6oHsL8EAAcbWuGzxO/pXoIsO72JLkgyT+qhzAfjqsewFz5VpL3Vo8ApmJrhvf0/KJ6CPPBEwCWXJbh3cL+TsDGdSTJ9iT3Vg+hnk8BsOQrcfjDRreQ5MvVI5gP/sMnGV4R/LZ6BDAzl8ZTgPY8ASBJPls9AJipz1QPoJ4nAGxOsi/JqdVDgJl5LskZGb5VkKY8AWB7HP7QzWlJLqkeQS0BwBXVA4ASPvLbnADgndUDgBLvqB5ALQHA26oHACXOrR5ALQHA6dUDgBL+7TcnANhSPQAo4c2/zQkAAGhIALC/egBQ4vnqAdQSADxdPQAo4d9+cwKAR6sHACUeqR5ALQHAn6oHACV2Vw+glgBgV/UAoMSd1QOo5cuA8GVA0M+zGb4M6KXqIdTxBICDSX5cPQKYqR/F4d+eACBJbqoeAMzUzdUDqCcASJJ7ktxVPQKYiTuS3Fc9gnreA8CS7Unujr8TsJEdTnJpkt9XD6GeJwAs+V2SW6tHAFN1Sxz+LPJqj6NtTfJAkrdWDwHW3eNJtmX4BAB4AsB/eSbJdUkOVA8B1tWBJNfG4c9RBADHuj/DfxT/qh4CrIuXk9yQ5MHqIcyX46oHMJceS/JwkquTHF+8BXjtXkzyiSQ/qx7C/PEeAFZyeZIfZPiNYcC4/D3D07y7q4cwn/wIgJX8Jsn5SW6vHgJM5FcZ/u06/FmWAGA1TyV5X4afIT5RvAVY2d4k1yd5f4YnALAsPwJgEick+VSSLyY5r3gL8IrdSb6e5LtJ/lm8hZEQALxW52d4k+CVGT5bfHLtHGjlQIZP7OzM8Aa/P9bOYYwEAOthIcnZi9eWxYv1dXGSL1WPWKOvxu+an4b9i9fexetI7RzGzke8WA9HkuxZvOC+JD+sHgGszJsAAaAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAwDgcqR4wgTFthbYEAIzDweoBE3ihegCwOgEA4/B89YAJjGkrtCUAYBz2Vg+YwJ7qAcDqFqoHAGuyKcn+JJurh6ziQJIt8T4AmHueAMA4HE7yQPWINfhDHP4wCgIAxuPO6gFrMIaNADAq2zK8up7n611Tu3sAaGx36g/55a6HpnjfwDrzIwAYl29WD1jB16oHAMBGdWKSJ1L/av/Ya0+SE6Z43wDQ3idTf+Afe1031TsGALKQ5PbUH/pL123TvV0AYMkZSZ5K/eG/L8lZU75XAOAoV2T4kqCqw/9gksumfpcAwP+4JsmhzP7wP5TkIzO4PwBgGR/M8BW8szr8X0jygZncGQCwom1JHs/0D//Hklwwo3sCANbgdUm+neGLg9b74H85yU1JTpvZ3QAAE7kkyc6s3+F/e5L3zPQOAIDX7OIMTwSezeSH/jNJbo6DHzasheoBwNSdlOGpwI4k5yU5N8mZSbYs/vn+DL9T4NEMXzZ0Z5J7k7w086UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBb/wZbBslbvt5qugAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
