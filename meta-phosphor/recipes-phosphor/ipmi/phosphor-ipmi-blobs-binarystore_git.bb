HOMEPAGE = "http://github.com/openbmc/phosphor-ipmi-blobs-binarystore"
SUMMARY = "BMC Generic Binary Blob Store via OEM IPMI Blob Transport"
DESCRIPTION = "This package provides a read/write/serialize abstraction for storing binary data through IPMI blobs"
PR = "r1"
PV = "1.0+git${SRCPV}"
LICENSE = "Apache-2.0"
LIC_FILES_CHKSUM = "file://LICENSE;md5=86d3f3a95c324c9479bd8986968f4327"

inherit autotools pkgconfig
inherit obmc-phosphor-ipmiprovider-symlink

DEPENDS += "autoconf-archive-native"
DEPENDS += "phosphor-ipmi-blobs"
DEPENDS += "phosphor-logging"
DEPENDS += "protobuf-native"
DEPENDS += "protobuf"

S = "${WORKDIR}/git"
SRC_URI = "git://github.com/openbmc/phosphor-ipmi-blobs-binarystore"
SRCREV = "e496b2bb477e2af1a9755fbe6ac891e82ff73eb6"

FILES_${PN}_append = " ${libdir}/ipmid-providers/lib*${SOLIBS}"
FILES_${PN}_append = " ${libdir}/blob-ipmid/lib*${SOLIBS}"
FILES_${PN}-dev_append = " ${libdir}/ipmid-providers/lib*${SOLIBSDEV} ${libdir}/ipmid-providers/*.la"

BLOBIPMI_PROVIDER_LIBRARY += "libbinarystore.so"

require conf/machine/include/unpack.inc

