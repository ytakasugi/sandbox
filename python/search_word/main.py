import argparse
import os
import re
import xlwings as xw

def search_excel_files(directory, keyword, result_file):
    pattern = re.compile(keyword)
    # pattern = re.compile("0[-\s]*\d{1,4}[-\s]*\d{1,4}[-\s]*\d{4}")
    with open(result_file, 'w') as f:
        for root, dirs, files in os.walk(directory):
            for file in files:
                if file.endswith('.xlsx'):
                    filepath = os.path.join(root, file)
                    wb = xw.Book(filepath, update_links=False, read_only=True)
                    for sheet in wb.sheets:
                        for cell in sheet.used_range:
                            if pattern.search(str(cell.value)):
                                f.write(f"{filepath},{cell.address},{cell.value}\n")
                        for shape in sheet.shapes:
                            match = pattern.search(shape.text)
                            if match:
                                cell = sheet.range(shape.api.TopLeftCell.Address)
                                f.write(f"{filepath}, {cell.address}, {match.group()}\n")
                    wb.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Search Excel files for a keyword.')
    parser.add_argument('directory', help='Directory to search')
    parser.add_argument('keyword', help='Keyword to search for (supports regex)')
    parser.add_argument('result_file', help='File to write results to')
    args = parser.parse_args()

    search_excel_files(args.directory, args.keyword, args.result_file)

