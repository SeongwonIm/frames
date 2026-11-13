#!/bin/bash

# Changed file staging
git add .

# Current date and time for automatic commit
git commit -m "Update photos: $(date '+%Y-%m-%d %H:%M')"

# Push to GitHub remote repository
git push
