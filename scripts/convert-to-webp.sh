#!/bin/bash

# A simple script to automatically find and convert .png / .jpg files to modern .webp format
# using cwebp to optimize image size for performance while retaining quality.

# Directory to search for images (defaults to public folder)
TARGET_DIR="${1:-public}"

# Find and convert all PNGs and JPGs
# Note: Requires `webp` package (brew install webp on Mac)
find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read img; do
    # Skip if it's already a webp file
    if [[ "$img" == *.webp ]]; then
        continue
    fi
    
    # Define output filename, replace the old extension with .webp
    output_img="${img%.*}.webp"
    
    # Check if a .webp version already exists so we don't duplicate work
    if [ ! -f "$output_img" ]; then
        echo "Converting: $img -> $output_img"
        
        # Convert to webp with an quality factor of 82 (adjust between 0 to 100 as needed)
        cwebp -q 82 "$img" -o "$output_img"
        
        # Optionally, you can delete the original image after successful conversion
        # by uncommenting the line below:
        # rm "$img"
    else
        echo "Skipping (already converted): $img"
    fi
done

echo ""
echo "Bulk conversion complete!"
echo "Make sure to update any <Image src='...' /> paths in your codebase to point to .webp instead of .jpg/.png!"
