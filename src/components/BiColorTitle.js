import React, { ReactNode } from 'react'
import { Box, Text, ResponsiveValue } from '@chakra-ui/react'
// import { Property } from 'csstype'

// interface Props {
//     children?: string | ReactNode;
//     firstPartColor?: string;
//     secondPartColor?: string;
//     textStyle?: string;
//     weight?: string;
//     align?: ResponsiveValue<Property.TextAlign>;
// }

export const BiColorTitle = ({ children = '', firstPartColor = 'neutral.950', secondPartColor = 'neutral.400', textStyle = 'uber', weight = '600', align = {base: 'center', md: 'left'} }: Props) => {
    const words = children.split(' ');
    const secondPart = words.length > 0 ? words.pop() : '';
    const firstPart = words.join(' ');

    return (
        <Box textAlign={align} pt={2}>
            {firstPart && (
                <Text as="span" textStyle={textStyle} fontWeight={weight} color={firstPartColor || undefined}>
                    {firstPart}
                </Text>
            )}
            {secondPart && (
                <Text as="span" textStyle={textStyle} fontWeight={weight} color={secondPartColor || undefined}>
                    {' ' + secondPart}
                </Text>
            )}
        </Box>
    );
}
