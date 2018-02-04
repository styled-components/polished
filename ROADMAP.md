# Project Roadmap

Curious what we have in mind for `✨ polished`? This doc lists the features we are currently working on, what we're planning on adding in the future, as well as items that have been requested but we've chosen not to pursue.

Interested in contributing? Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Upcoming Breaking Changes

- Typescript support will be temporarily deprecated in 2.0 in order to change our approach to generating types. The goal is to bring it back in 2.1. This is being done to unblock several new features and build issues that aren't currently supported by our current method. (#276 #250 )
- Mark Placeholder for deprecation in 3.0. (#175)
- Mark Selection for deprecation in 3.0. (#175)

## Features Actively In Development For 2.0

- CSS-Locks Mixin. (#129)
- Cover Mixin. (#258)
- Font Smoothing Mixin. (#209)
- React Native mixins for dealing with `Device` width and height. (#143)
- Add support for `font-display`, `font-variation-settings`, `font-feature-settings` to `FontFace` mixin. (#286)
- Add support for giving multiple properties the same transition in `transitions` shorthand. (#232)
- Accept string as a valid parameter type for float parameters in all color modules. (#243)
- Fix for `ellipsis` helper to deal better with whitespace problem caused by `inline-block`.
- Improvement to color modules to better handle the `transparent` keyword. (#188)
- New docs removed from build for easier contribution. (#256)
- Updated contributor guidelines and instructions.

## Features Being Considered For Inclusion In Future Releases

- Bring back TypeScript support.
- Reason support.
- Border shorthand to address issues with shorthand properties in tools like Fela. (#264)
- Modules for doing math operations on values with units of measure. (#233 #212)
- Add support for HCL color space. (#211)

## Features That Won't Be Included

- CSS-in-JS library specific helpers. (#103)
