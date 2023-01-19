import { createStitches } from "@stitches/react";

export const {
    getCssText,
    config,
    styled
} = createStitches({
    theme: {
        colors: {
            primary: '#122738',
            secondary: '#FF9C00',
            danger: '#dc3545',
            success: '#198754',
            warning: '#ffc107',
            info: '#0dcaf0'
        }
    }
})
